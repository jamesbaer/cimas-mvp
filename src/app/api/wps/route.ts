import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const searchParams = request.nextUrl.searchParams;
  const debug = searchParams.get('debug') === '1';
  
  try {
    // Build HERE WPS URL
    const baseUrl = 'https://wps.hereapi.com/v8/findsequence2';
    const params = new URLSearchParams();
    
    // Add user parameters
    const start = searchParams.get('start');
    const end = searchParams.get('end');
    const improveFor = searchParams.get('improveFor') || 'time';
    const mode = searchParams.get('mode') || 'balanced;truck';
    
    if (start) params.append('start', start);
    if (end) params.append('end', end);
    
    // Add intermediate waypoints (w0, w1, w2, ...)
    let i = 0;
    while (true) {
      const waypoint = searchParams.get(`w${i}`);
      if (!waypoint) break;
      params.append(`destination${i + 1}`, waypoint);
      i++;
    }
    
    params.append('improveFor', improveFor);
    params.append('mode', mode);
    params.append('apiKey', process.env.NEXT_PUBLIC_HERE_API_KEY || '');
    
    const requestedUrl = `${baseUrl}?${params.toString()}`;
    
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
      requestedUrl: requestedUrl.replace(process.env.NEXT_PUBLIC_HERE_API_KEY || '', 'REDACTED'),
      status,
      elapsedMs,
      json,
      rawBody
    };
    
    // Always log on server
    console.log('[WPS Debug]', JSON.stringify(envelope, null, 2));
    
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
    
    console.error('[WPS Error]', envelope);
    
    return NextResponse.json(envelope, { status: 500 });
  }
}
