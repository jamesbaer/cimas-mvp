'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

type MarkerDef = { lat: number; lng: number; label?: string };
type RenderArgs = { data: any; routeName?: string; markers?: MarkerDef[]; color?: string };

const ROUTE_COLORS = [
  '#3B82F6', // Blue
  '#EF4444', // Red
  '#10B981', // Green
  '#F59E0B', // Amber
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#14B8A6', // Teal
  '#F97316', // Orange
];

let routeColorIndex = 0;

export default function MapComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const baseRef = useRef<any>(null);
  const overlaysRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    
    console.log('[Map] Initializing Leaflet...');
    
    // Import Leaflet synchronously in useEffect (client-side only)
    import('leaflet').then((L) => {
      if (mapRef.current) return; // Already initialized
      
      console.log('[Map] Creating map instance...');
      const map = L.default.map(containerRef.current!);
      const base = L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
      const overlays = L.default.layerGroup().addTo(map);

      map.setView([42.85, -2.66], 11);
      
      mapRef.current = map;
      baseRef.current = base;
      overlaysRef.current = overlays;
      
      console.log('[Map] Map initialized successfully!');
    }).catch(err => {
      console.error('[Map] Failed to load Leaflet:', err);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Expose API via window
  useEffect(() => {
    if (!mapRef.current) return;
    
    (window as any).__mapAPI = {
      clearOverlays() {
        console.log('[Map] clearOverlays called');
        if (overlaysRef.current) {
          overlaysRef.current.clearLayers();
        }
        routeColorIndex = 0; // Reset color index
      },
      
      async addSpecialMarker({ lat, lng, label, icon }: { lat: number; lng: number; label: string; icon: string }) {
        if (!mapRef.current || !overlaysRef.current) return;
        const L = (await import('leaflet')).default;
        
        L.marker([lat, lng], {
          icon: L.divIcon({
            className: '',
            html: `<div style="font-size: 32px; text-align: center; line-height: 1;">${icon}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32]
          })
        })
        .addTo(overlaysRef.current)
        .bindPopup(`<b>${label}</b><br>${lat.toFixed(6)}, ${lng.toFixed(6)}`);
      },
      
      async renderRoutingJson({ data, routeName = 'route', markers = [], color }: RenderArgs) {
      console.log('[Map] renderRoutingJson called');
      
      if (!mapRef.current || !overlaysRef.current) {
        console.error('[Map] Map not ready!', { 
          map: !!mapRef.current, 
          overlays: !!overlaysRef.current 
        });
        return;
      }

      const L = (await import('leaflet')).default;
      const { decodeFlexPolyline } = await import('@/lib/polyline');

      // Don't clear all overlays - we want to keep previous routes
      const fg = L.featureGroup().addTo(overlaysRef.current);

      const sections = data?.routes?.[0]?.sections || [];
      console.log('[Map] Found sections:', sections.length);
      
      // Use provided color or get next color from palette
      const routeColor = color || ROUTE_COLORS[routeColorIndex % ROUTE_COLORS.length];
      routeColorIndex++;
      
      let drew = false;
      let idx = 0;
      const fallback: [number, number][] = [];

      const getLL = (place: any) => {
        const p = place?.originalLocation || place?.location || place;
        if (!p || typeof p.lat !== 'number' || typeof p.lng !== 'number') return null;
        return [p.lat, p.lng] as [number, number];
      };

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];

        // Draw polyline
        if (sec.polyline) {
          try {
            console.log(`[Map] Decoding polyline for section ${i}, length:`, sec.polyline.length);
            const coords = decodeFlexPolyline(sec.polyline);
            console.log(`[Map] Decoded ${coords.length} coordinates`);
            L.polyline(coords, { weight: 4, color: routeColor, opacity: 0.8 }).addTo(fg);
            drew = true;
          } catch (e) {
            console.error('[Map] Polyline decode failed:', e);
          }
        }

        // Start marker (first section only)
        if (i === 0 && sec.departure?.place) {
          const ll = getLL(sec.departure.place);
          if (ll) {
            L.marker(ll, { 
              icon: L.divIcon({ 
                className: '', 
                html: `<div class="num-icon" style="background: ${routeColor};">${idx}</div>`, 
                iconSize: [22, 22], 
                iconAnchor: [11, 11]
              }) 
            })
            .addTo(fg)
            .bindPopup(`<b>${routeName} - Start</b><br>${ll[0].toFixed(6)}, ${ll[1].toFixed(6)}`);
            fallback.push(ll);
            idx++;
          }
        }
        
        // Arrival marker (each section)
        if (sec.arrival?.place) {
          const ll = getLL(sec.arrival.place);
          if (ll) {
            L.marker(ll, { 
              icon: L.divIcon({ 
                className: '', 
                html: `<div class="num-icon" style="background: ${routeColor};">${idx}</div>`, 
                iconSize: [22, 22], 
                iconAnchor: [11, 11]
              }) 
            })
            .addTo(fg)
            .bindPopup(`<b>${routeName} - Stop ${idx}</b><br>${ll[0].toFixed(6)}, ${ll[1].toFixed(6)}`);
            fallback.push(ll);
            idx++;
          }
        }
      }

      // Optional extra markers
      for (const m of markers) {
        L.marker([m.lat, m.lng]).addTo(fg).bindPopup(m.label ?? '');
      }

      // Fallback to straight line if no polyline
      if (!drew && fallback.length > 1) {
        console.log('[Map] No polyline, using fallback with', fallback.length, 'points');
        L.polyline(fallback, { weight: 2, dashArray: '4,6', color: '#888' }).addTo(fg);
        drew = true;
      }
      
      console.log('[Map] Rendering complete. Drew:', drew, 'Markers:', idx);
      
      // Fit bounds
      if (drew) {
        try {
          mapRef.current.fitBounds(fg.getBounds(), { padding: [24, 24] });
          console.log('[Map] Fitted bounds');
        } catch (e) {
          console.error('[Map] Failed to fit bounds:', e);
        }
      }
      }
    };
  }, [mapRef.current]);

  return <div ref={containerRef} className="w-full h-full" />;
}
