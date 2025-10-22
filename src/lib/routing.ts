/**
 * Routing URL builder for HERE Routing v8 API
 */

export interface Waypoint {
  lat: number;
  lng: number;
  sequence: number;
  id?: string;
}

export interface TruckOptions {
  height?: number;
  width?: number;
  length?: number;
  grossWeight?: number;
}

export interface RoutingOptions {
  transportMode?: 'truck' | 'car';
  routingMode?: 'fast' | 'balanced';
  truck?: TruckOptions;
}

/**
 * Validates latitude is in valid range
 */
function validLat(lat: number): boolean {
  return Number.isFinite(lat) && lat >= -90 && lat <= 90;
}

/**
 * Validates longitude is in valid range
 */
function validLon(lng: number): boolean {
  return Number.isFinite(lng) && lng >= -180 && lng <= 180;
}

/**
 * Builds a valid HERE Routing v8 GET URL from ordered waypoints
 * 
 * @param ordered - Array of waypoints sorted by sequence (at least 2 required)
 * @param opts - Optional routing and truck configuration
 * @param apiKey - HERE API key (server-side only)
 * @returns Fully-formed GET URL string
 * 
 * @example
 * const url = buildRoutingUrlFromWps(
 *   [
 *     { lat: 43.0, lng: -2.6, sequence: 0 },
 *     { lat: 43.02, lng: -2.61, sequence: 1 },
 *     { lat: 43.03, lng: -2.63, sequence: 2 },
 *     { lat: 43.1, lng: -2.5, sequence: 3 }
 *   ],
 *   { transportMode: 'truck', routingMode: 'fast' },
 *   'YOUR_API_KEY'
 * );
 * // Returns: https://router.hereapi.com/v8/routes?transportMode=truck&routingMode=fast&origin=43.0,-2.6&via=43.02,-2.61&via=43.03,-2.63&destination=43.1,-2.5&return=polyline,summary&apiKey=YOUR_API_KEY
 */
export function buildRoutingUrlFromWps(
  ordered: Waypoint[],
  opts?: RoutingOptions,
  apiKey?: string
): string {
  // Validation
  if (!ordered || ordered.length < 2) {
    throw new Error('Need at least origin and destination (minimum 2 waypoints)');
  }

  // Validate all coordinates
  for (const wp of ordered) {
    if (!validLat(wp.lat)) {
      throw new Error(`Invalid latitude: ${wp.lat} (must be between -90 and 90)`);
    }
    if (!validLon(wp.lng)) {
      throw new Error(`Invalid longitude: ${wp.lng} (must be between -180 and 180)`);
    }
  }

  const base = 'https://router.hereapi.com/v8/routes';
  const params = new URLSearchParams();

  // Transport and routing mode
  params.set('transportMode', opts?.transportMode || 'truck');
  params.set('routingMode', opts?.routingMode || 'fast');

  // Origin and destination
  const origin = ordered[0];
  const dest = ordered[ordered.length - 1];
  params.set('origin', `${origin.lat},${origin.lng}`);
  params.set('destination', `${dest.lat},${dest.lng}`);

  // Via waypoints (all interior points)
  for (const wp of ordered.slice(1, -1)) {
    params.append('via', `${wp.lat},${wp.lng}`);
  }

  // Return fields - DO NOT include 'notices' as it's invalid in GET mode
  params.set('return', 'polyline,summary');

  // Optional truck parameters
  const truck = opts?.truck || {};
  const isNum = (x: any): x is number => Number.isFinite(x);
  
  if (isNum(truck.height)) params.set('truck[height]', String(truck.height));
  if (isNum(truck.width)) params.set('truck[width]', String(truck.width));
  if (isNum(truck.length)) params.set('truck[length]', String(truck.length));
  if (isNum(truck.grossWeight)) params.set('truck[grossWeight]', String(truck.grossWeight));

  // API key (server-side only)
  if (apiKey) {
    params.set('apiKey', apiKey);
  }

  return `${base}?${params.toString()}`;
}

/**
 * Parses waypoint query parameters in the format "lat,lng,sequence"
 * and returns sorted waypoints
 */
export function parseWaypointParams(wpParams: string[]): Waypoint[] {
  const waypoints: Waypoint[] = [];
  
  for (const wp of wpParams) {
    const parts = wp.split(',');
    if (parts.length !== 3) {
      throw new Error(`Invalid waypoint format: ${wp} (expected "lat,lng,sequence")`);
    }
    
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);
    const sequence = parseInt(parts[2], 10);
    
    if (!validLat(lat) || !validLon(lng) || !Number.isFinite(sequence)) {
      throw new Error(`Invalid waypoint values: ${wp}`);
    }
    
    waypoints.push({ lat, lng, sequence });
  }
  
  // Sort by sequence
  waypoints.sort((a, b) => a.sequence - b.sequence);
  
  return waypoints;
}
