import { NextRequest, NextResponse } from 'next/server';
import { buildRoutingUrlFromWps, parseWaypointParams, type Waypoint, type RoutingOptions } from '@/lib/routing';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const searchParams = request.nextUrl.searchParams;
  const debug = searchParams.get('debug') === '1';
  
  try {
    const apiKey = process.env.NEXT_PUBLIC_HERE_API_KEY;
    if (!apiKey) {
      throw new Error('HERE_API_KEY not configured');
    }

    let requestedUrl: string;
    
    // Check if we have wp (waypoint) parameters from WPS output
    const wpParams = searchParams.getAll('wp');
    
    if (wpParams.length > 0) {
      // Parse wp parameters: "lat,lng,sequence"
      const waypoints = parseWaypointParams(wpParams);
      
      // Build routing options
      const opts: RoutingOptions = {
        transportMode: (searchParams.get('transportMode') as 'truck' | 'car') || 'truck',
        routingMode: (searchParams.get('routingMode') as 'fast' | 'balanced') || 'fast',
        truck: {}
      };
      
      const truckHeight = searchParams.get('truck[height]');
      const truckWidth = searchParams.get('truck[width]');
      const truckLength = searchParams.get('truck[length]');
      const truckGrossWeight = searchParams.get('truck[grossWeight]');
      
      if (truckHeight) opts.truck!.height = parseFloat(truckHeight);
      if (truckWidth) opts.truck!.width = parseFloat(truckWidth);
      if (truckLength) opts.truck!.length = parseFloat(truckLength);
      if (truckGrossWeight) opts.truck!.grossWeight = parseFloat(truckGrossWeight);
      
      requestedUrl = buildRoutingUrlFromWps(waypoints, opts, apiKey);
    } else {
      // Direct origin/via/destination mode
      const origin = searchParams.get('origin');
      const destination = searchParams.get('destination');
      const vias = searchParams.getAll('via');
      
      if (!origin || !destination) {
        throw new Error('Missing required parameters: origin and destination');
      }
      
      // Parse origin
      const [originLat, originLng] = origin.split(',').map(parseFloat);
      
      // Parse destination
      const [destLat, destLng] = destination.split(',').map(parseFloat);
      
      // Build waypoints array
      const waypoints: Waypoint[] = [
        { lat: originLat, lng: originLng, sequence: 0 }
      ];
      
      // Add via waypoints
      vias.forEach((via, idx) => {
        const [lat, lng] = via.split(',').map(parseFloat);
        waypoints.push({ lat, lng, sequence: idx + 1 });
      });
      
      // Add destination
      waypoints.push({ lat: destLat, lng: destLng, sequence: waypoints.length });
      
      // Build routing options
      const opts: RoutingOptions = {
        transportMode: (searchParams.get('transportMode') as 'truck' | 'car') || 'truck',
        routingMode: (searchParams.get('routingMode') as 'fast' | 'balanced') || 'fast',
        truck: {}
      };
      
      const truckHeight = searchParams.get('truck[height]');
      const truckWidth = searchParams.get('truck[width]');
      const truckLength = searchParams.get('truck[length]');
      const truckGrossWeight = searchParams.get('truck[grossWeight]');
      
      if (truckHeight) opts.truck!.height = parseFloat(truckHeight);
      if (truckWidth) opts.truck!.width = parseFloat(truckWidth);
      if (truckLength) opts.truck!.length = parseFloat(truckLength);
      if (truckGrossWeight) opts.truck!.grossWeight = parseFloat(truckGrossWeight);
      
      requestedUrl = buildRoutingUrlFromWps(waypoints, opts, apiKey);
    }
    
    // Fetch from HERE API
    const response = await fetch(requestedUrl);
    const status = response.status;
    const rawBody = await response.text();
    const elapsedMs = Date.now() - startTime;
    
    let json: any = null;
    try {
      json = JSON.parse(rawBody);
    } catch (e) {
      // Not JSON
    }
    
    const envelope = {
      ok: response.ok,
      requestedUrl: requestedUrl.replace(apiKey, 'REDACTED'),
      status,
      elapsedMs,
      json,
      rawBody
    };
    
    // Always log on server
    console.log('[Routing Debug]', JSON.stringify(envelope, null, 2));
    
    if (debug) {
      return NextResponse.json(envelope);
    } else {
      // Pass through HERE response
      return new NextResponse(rawBody, {
        status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error: any) {
    const elapsedMs = Date.now() - startTime;
    const envelope = {
      ok: false,
      requestedUrl: '',
      status: 500,
      elapsedMs,
      error: error.message
    };
    
    console.error('[Routing Error]', envelope);
    
    return NextResponse.json(envelope, { status: 500 });
  }
}
