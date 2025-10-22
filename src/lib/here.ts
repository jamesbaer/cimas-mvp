import type { ClusteredWaypoint } from './cluster';
import { decodeFlexPolyline } from './polyline';

export interface SequencedWaypoint extends ClusteredWaypoint {
  sequenceIndex: number;
}

export interface RoutePolyline {
  cluster: number;
  coordinates: Array<[number, number]>; // Decoded lat/lon pairs
  waypoints: SequencedWaypoint[];
  summary: {
    duration: number;
    length: number;
  };
  name: string;
  rawResponse?: any; // Store raw HERE API response for rendering
}

/**
 * Generate geographic name for a route based on its position relative to depot
 */
export function generateRouteName(
  cluster: number,
  waypoints: ClusteredWaypoint[],
  depotLat: number,
  depotLon: number
): string {
  const lats = waypoints.map(w => w.lat);
  const lons = waypoints.map(w => w.lon);
  const centerLat = lats.reduce((a, b) => a + b, 0) / lats.length;
  const centerLon = lons.reduce((a, b) => a + b, 0) / lons.length;
  
  const latDiff = centerLat - depotLat;
  const lonDiff = centerLon - depotLon;
  
  let direction = '';
  if (Math.abs(latDiff) > Math.abs(lonDiff)) {
    direction = latDiff > 0 ? 'North' : 'South';
  } else {
    direction = lonDiff > 0 ? 'East' : 'West';
  }
  
  const threshold = 0.01;
  if (Math.abs(latDiff) > threshold && Math.abs(lonDiff) > threshold) {
    const secondary = latDiff > 0 ? 'North' : 'South';
    if (direction === 'East' || direction === 'West') {
      direction = `${secondary}${direction.toLowerCase()}`;
    }
  }
  
  return `${direction} Route`;
}

/**
 * Sequence waypoints using HERE Waypoint Sequencing API
 * Route: Cochera → Stops → Planta → Cochera
 */
export async function sequenceWaypoints(
  waypoints: ClusteredWaypoint[],
  cocheraLat: number,
  cocheraLon: number,
  plantaLat: number,
  plantaLon: number,
  apiKey: string
): Promise<SequencedWaypoint[]> {
  if (waypoints.length === 0) return [];
  
  // WPS API has a limit (~100-120 waypoints). For large clusters, skip WPS and use cluster order
  if (waypoints.length > 50) {
    console.log(`[WPS] Skipping WPS for ${waypoints.length} waypoints (too many). Using cluster order.`);
    return waypoints.map((wp, idx) => ({ ...wp, sequenceIndex: idx }));
  }
  
  const baseUrl = 'https://wps.hereapi.com/v8/findsequence2';
  const params = new URLSearchParams();
  
  // Start at Cochera
  params.append('start', `s;${cocheraLat},${cocheraLon}`);
  
  // Add all waypoints as destinations
  waypoints.forEach((wp, idx) => {
    params.append(`w${idx}`, `${wp.id};${wp.lat},${wp.lon}`);
  });
  
  // Add Planta as destination before returning
  params.append(`w${waypoints.length}`, `planta;${plantaLat},${plantaLon}`);
  
  // End back at Cochera
  params.append('end', `e;${cocheraLat},${cocheraLon}`);
  
  params.append('improveFor', 'time');
  params.append('mode', 'fastest;truck;traffic:enabled');
  
  // Format: YYYY-MM-DDTHH:MM:SS+00:00 (WPS requires timezone offset, no milliseconds)
  const now = new Date();
  const isoString = now.toISOString();
  const departure = isoString.split('.')[0] + '+00:00'; // Remove milliseconds
  params.append('departure', departure);
  
  params.append('apiKey', apiKey);
  
  const url = `${baseUrl}?${params.toString()}`;
  console.log('[WPS] Request URL params:', params.toString().substring(0, 300));
  console.log('[WPS] Number of waypoints in request:', waypoints.length);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('WPS API error:', response.status, errorText);
      throw new Error(`Waypoint sequencing failed: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('[WPS] Response data:', JSON.stringify(data).substring(0, 500));
    
    const sequence = data.results?.[0]?.waypoints || [];
    console.log('[WPS] Found', sequence.length, 'waypoints in sequence');
    
    const sequenced: SequencedWaypoint[] = [];
    
    let sequenceIndex = 0;
    for (let i = 0; i < sequence.length; i++) {
      const seqWp = sequence[i];
      console.log(`[WPS] Waypoint ${i}: id=${seqWp.id}`);
      // Skip start, end, and planta - they're not customer stops
      if (seqWp.id === 's' || seqWp.id === 'e' || seqWp.id === 'planta') continue;
      
      const originalWp = waypoints.find(w => w.id === seqWp.id);
      if (originalWp) {
        sequenced.push({ 
          ...originalWp, 
          lat: seqWp.lat,
          lon: seqWp.lng, // WPS uses 'lng' in response
          sequenceIndex: sequenceIndex 
        });
        sequenceIndex++;
      }
    }
    
    return sequenced;
  } catch (error) {
    console.error('Waypoint sequencing error:', error);
    // Fallback: return waypoints in original order
    return waypoints.map((wp, idx) => ({ ...wp, sequenceIndex: idx }));
  }
}

/**
 * Get truck route with polyline using HERE Routing API v8
 * Route: Cochera → Stops → Planta → Cochera
 */
export async function getTruckRoute(
  waypoints: SequencedWaypoint[],
  cocheraLat: number,
  cocheraLon: number,
  plantaLat: number,
  plantaLon: number,
  apiKey: string
): Promise<Omit<RoutePolyline, 'name'> | null> {
  if (waypoints.length === 0) return null;
  
  const baseUrl = 'https://router.hereapi.com/v8/routes';
  const params = new URLSearchParams();
  
  params.append('transportMode', 'truck');
  params.append('routingMode', 'fast');
  
  // Start at Cochera
  params.append('origin', `${cocheraLat},${cocheraLon}`);
  
  // Add all customer stops in sequence
  const sorted = [...waypoints].sort((a, b) => a.sequenceIndex - b.sequenceIndex);
  sorted.forEach(wp => {
    params.append('via', `${wp.lat},${wp.lon}`);
  });
  
  // Go to Planta
  params.append('via', `${plantaLat},${plantaLon}`);
  
  // Return to Cochera
  params.append('destination', `${cocheraLat},${cocheraLon}`);
  
  // Format: YYYY-MM-DDTHH:MM:SS+00:00 (Remove milliseconds for consistency)
  const now = new Date();
  const isoString = now.toISOString();
  const departureTime = isoString.split('.')[0] + '+00:00'; // Remove milliseconds
  params.append('departureTime', departureTime);
  
  params.append('return', 'summary,polyline,actions,travelSummary');
  params.append('vehicle[currentWeight]', '12000');
  params.append('vehicle[grossWeight]', '26000');
  params.append('vehicle[height]', '320');
  params.append('vehicle[weightPerAxle]', '8000');
  params.append('apiKey', apiKey);
  
  const url = `${baseUrl}?${params.toString()}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('[getTruckRoute] Routing API error:', response.status, errorText);
      throw new Error(`Truck routing failed: ${response.status}`);
    }
    
    const data = await response.json();
    const route = data.routes?.[0];
    
    if (!route) {
      console.error('[getTruckRoute] No route in response:', JSON.stringify(data).substring(0, 500));
      throw new Error('No route found in response');
    }
    
    // Decode each section's polyline and combine all coordinates
    const allCoordinates: Array<[number, number]> = [];
    const sections = route.sections || [];
    
    for (const section of sections) {
      if (section.polyline) {
        try {
          const coords = decodeFlexPolyline(section.polyline);
          allCoordinates.push(...coords);
        } catch (error) {
          console.error('Error decoding polyline section:', error);
        }
      }
    }
    
    return {
      cluster: waypoints[0].cluster,
      coordinates: allCoordinates,
      waypoints: sorted,
      summary: {
        duration: sections.reduce((sum: number, s: any) => sum + (s.summary?.duration || 0), 0) || 0,
        length: sections.reduce((sum: number, s: any) => sum + (s.summary?.length || 0), 0) || 0,
      },
      rawResponse: data, // Store raw API response for rendering
    };
  } catch (error) {
    console.error('[getTruckRoute] Error:', error instanceof Error ? error.message : error);
    return null;
  }
}

/**
 * Process all clusters: sequence waypoints and get routes
 */
export async function processAllRoutes(
  clusteredWaypoints: ClusteredWaypoint[],
  numClusters: number,
  cocheraLat: number,
  cocheraLon: number,
  plantaLat: number,
  plantaLon: number,
  apiKey: string
): Promise<RoutePolyline[]> {
  const routes: RoutePolyline[] = [];
  
  console.log(`[processAllRoutes] Starting with ${numClusters} clusters, ${clusteredWaypoints.length} total waypoints`);
  
  for (let cluster = 0; cluster < numClusters; cluster++) {
    const clusterWaypoints = clusteredWaypoints.filter(w => w.cluster === cluster);
    
    if (clusterWaypoints.length === 0) {
      console.log(`[processAllRoutes] Cluster ${cluster} is empty, skipping`);
      continue;
    }
    
    console.log(`Processing route ${cluster + 1}/${numClusters} with ${clusterWaypoints.length} stops...`);
    
    const sequenced = await sequenceWaypoints(clusterWaypoints, cocheraLat, cocheraLon, plantaLat, plantaLon, apiKey);
    console.log(`[processAllRoutes] Sequenced ${sequenced.length} waypoints for cluster ${cluster}`);
    
    const route = await getTruckRoute(sequenced, cocheraLat, cocheraLon, plantaLat, plantaLon, apiKey);
    console.log(`[processAllRoutes] getTruckRoute returned:`, route ? 'SUCCESS' : 'NULL');
    
    if (route) {
      const name = generateRouteName(cluster, clusterWaypoints, cocheraLat, cocheraLon);
      console.log(`[processAllRoutes] Adding route: ${name}`);
      routes.push({ ...route, name });
    } else {
      console.error(`[processAllRoutes] Route ${cluster} failed - getTruckRoute returned null`);
    }
  }
  
  console.log(`[processAllRoutes] Returning ${routes.length} routes`);
  return routes;
}
