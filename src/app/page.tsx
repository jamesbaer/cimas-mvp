'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { parseCSV, WASTE_TYPES, type ParseResult } from '@/lib/csv';
import { clusterWithConstraints, type ClusteredWaypoint } from '@/lib/cluster';
import { processAllRoutes, type RoutePolyline } from '@/lib/here';

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100">Loading map...</div>
});

// Global map API
let mapAPI: any = null;

export default function Home() {
  // Form state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [wasteType, setWasteType] = useState<string>('Envase final');
  const [cocheraLat, setCocheraLat] = useState<string>('42.873681');
  const [cocheraLon, setCocheraLon] = useState<string>('-2.644691');
  const [plantaLat, setPlantaLat] = useState<string>('42.873681');
  const [plantaLon, setPlantaLon] = useState<string>('-2.644691');
  const [maxStops, setMaxStops] = useState<string>('25');
  
  // Processing state
  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [clusteredRoutes, setClusteredRoutes] = useState<ClusteredWaypoint[] | null>(null);
  const [routes, setRoutes] = useState<RoutePolyline[] | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGeneratingRoutes, setIsGeneratingRoutes] = useState(false);
  const [error, setError] = useState<string>('');
  
  // Map state
  const [mapReady, setMapReady] = useState(false);
  
  // Check if map is ready
  useEffect(() => {
    const checkMap = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).__mapAPI) {
        console.log('[App] Map is ready!');
        mapAPI = (window as any).__mapAPI;
        setMapReady(true);
        clearInterval(checkMap);
      }
    }, 100);
    
    return () => clearInterval(checkMap);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setParseResult(null);
      setClusteredRoutes(null);
      setRoutes(null);
      setError('');
    }
  };

  const handleParseCSV = async () => {
    if (!selectedFile) {
      setError('Please select a CSV file first');
      return;
    }

    if (!cocheraLat || !cocheraLon) {
      setError('Please provide Cochera coordinates');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const result = await parseCSV(selectedFile, wasteType);
      setParseResult(result);
      
      if (result.filteredRows === 0) {
        setError(`No waypoints found with "Si" in ${wasteType}`);
        setClusteredRoutes(null);
        return;
      }

      // Cluster waypoints
      const maxStopsNum = maxStops ? parseInt(maxStops) : 25;
      const clustered = clusterWithConstraints(result.waypoints, maxStopsNum);
      setClusteredRoutes(clustered);
      
      console.log(`Clustered ${result.filteredRows} waypoints with max ${maxStopsNum} stops per route`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse CSV');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateRoutes = async () => {
    if (!clusteredRoutes || !cocheraLat || !cocheraLon || !plantaLat || !plantaLon) {
      setError('Please complete all steps first');
      return;
    }

    setIsGeneratingRoutes(true);
    setError('');

    try {
      const apiKey = process.env.NEXT_PUBLIC_HERE_API_KEY;
      if (!apiKey) {
        throw new Error('HERE API key not configured');
      }

      console.log('[App] Generating routes...');
      
      // Get number of clusters
      const clusters = new Set(clusteredRoutes.map(w => w.cluster));
      const numClusters = clusters.size;
      
      const generatedRoutes = await processAllRoutes(
        clusteredRoutes,
        numClusters,
        parseFloat(cocheraLat),
        parseFloat(cocheraLon),
        parseFloat(plantaLat),
        parseFloat(plantaLon),
        apiKey
      );

      setRoutes(generatedRoutes);
      console.log(`[App] Generated ${generatedRoutes.length} routes`);
      
      // Clear map and render all routes using raw API responses
      if (mapAPI) {
        await mapAPI.clearOverlays();
        
        // Add cochera and planta markers first
        await mapAPI.addSpecialMarker({
          lat: parseFloat(cocheraLat),
          lng: parseFloat(cocheraLon),
          label: 'Cochera (Garage)',
          icon: '🚗'
        });
        
        await mapAPI.addSpecialMarker({
          lat: parseFloat(plantaLat),
          lng: parseFloat(plantaLon),
          label: 'Planta (Plant)',
          icon: '🗑️'
        });
        
        // Render each route using its raw HERE API response
        for (const route of generatedRoutes) {
          if (route.rawResponse) {
            console.log(`[App] Rendering route: ${route.name}`);
            await mapAPI.renderRoutingJson({ 
              data: route.rawResponse, 
              routeName: route.name
            });
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate routes');
      console.error('[App] Route generation error:', err);
    } finally {
      setIsGeneratingRoutes(false);
    }
  };

  return (
    <main className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">CIMAS MVP - Route Planning</h1>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - Controls */}
        <aside className="w-96 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Map Status */}
            {!mapReady && (
              <div className="text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded p-3">
                ⏳ Map is loading...
              </div>
            )}
            {mapReady && (
              <div className="text-sm text-green-600 bg-green-50 border border-green-200 rounded p-3">
                ✓ Map ready
              </div>
            )}

            {/* CSV Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1. Upload CSV (Waypoints)
              </label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                  cursor-pointer"
              />
              {selectedFile && (
                <p className="mt-1 text-xs text-gray-500">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Waste Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Waste Type
              </label>
              <select
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                {WASTE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Cochera Coordinates */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Cochera (Garage) Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  step="0.000001"
                  value={cocheraLat}
                  onChange={(e) => setCocheraLat(e.target.value)}
                  placeholder="Latitude"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <input
                  type="number"
                  step="0.000001"
                  value={cocheraLon}
                  onChange={(e) => setCocheraLon(e.target.value)}
                  placeholder="Longitude"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Planta Coordinates */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                4. Planta (Plant) Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  step="0.000001"
                  value={plantaLat}
                  onChange={(e) => setPlantaLat(e.target.value)}
                  placeholder="Latitude"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <input
                  type="number"
                  step="0.000001"
                  value={plantaLon}
                  onChange={(e) => setPlantaLon(e.target.value)}
                  placeholder="Longitude"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Max Stops */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5. Max Stops per Route
              </label>
              <input
                type="number"
                min="1"
                value={maxStops}
                onChange={(e) => setMaxStops(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Process Button */}
            <button
              onClick={handleParseCSV}
              disabled={!selectedFile || isProcessing || !mapReady}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isProcessing ? 'Processing...' : '📊 Process CSV & Cluster'}
            </button>

            {/* Error Display */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Parse Results */}
            {parseResult && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm font-semibold text-green-900 mb-2">✓ CSV Processed</p>
                <div className="text-xs text-green-800 space-y-1">
                  <p><strong>Total rows:</strong> {parseResult.totalRows}</p>
                  <p><strong>Filtered waypoints:</strong> {parseResult.filteredRows}</p>
                  <p><strong>Waste type:</strong> {wasteType}</p>
                  {clusteredRoutes && (
                    <p><strong>Clusters created:</strong> {Math.ceil(parseResult.filteredRows / parseInt(maxStops || '25'))}</p>
                  )}
                </div>
              </div>
            )}

            {/* Generate Routes Button */}
            {clusteredRoutes && (
              <button
                onClick={handleGenerateRoutes}
                disabled={isGeneratingRoutes || !mapReady}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-semibold shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isGeneratingRoutes ? 'Generating Routes...' : '🗺️ Generate & Render Routes'}
              </button>
            )}

            {/* Route Results */}
            {routes && routes.length > 0 && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm font-semibold text-blue-900 mb-2">✓ Routes Generated</p>
                <div className="text-xs text-blue-800 space-y-2">
                  {routes.map((route, idx) => (
                    <div key={idx} className="p-2 bg-white rounded border border-blue-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">{route.name}</span>
                        <span className="text-xs bg-blue-100 px-2 py-1 rounded">{route.waypoints.length} stops</span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-0.5">
                        <p>Duration: {Math.round(route.summary.duration / 60)} min</p>
                        <p>Distance: {(route.summary.length / 1000).toFixed(1)} km</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right panel - Map */}
        <div className="flex-1 relative">
          <Map />
        </div>
      </div>
    </main>
  );
}
