# Debug Harness - Implementation Summary

## What Was Added

### 1. API Routes with Debug Mode

**`/api/wps/route.ts`** - WPS API with diagnostics
- Accepts GET requests with query parameters
- When `debug=1` is passed, returns diagnostic envelope
- Always logs full request details to server console
- Redacts API key in responses

**`/api/route/route.ts`** - Routing API with diagnostics  
- Accepts GET requests with query parameters
- When `debug=1` is passed, returns diagnostic envelope
- Always logs full request details to server console
- Redacts API key in responses

### 2. Validation Utilities

**`/lib/validation.ts`**
- `validLat(v)` - Validates latitude (-90 to 90)
- `validLon(v)` - Validates longitude (-180 to 180)
- `validateCSVData(data, wasteFilter)` - Validates CSV data and returns statistics

### 3. Diagnostics UI Panel

Added to `page.tsx`:
- Collapsible diagnostics section in sidebar
- Test waypoint inputs (origin, 2 vias, destination)
- Three diagnostic buttons:
  - **Run WPS (debug)** - Tests waypoint sequencing
  - **Run Routing (debug)** - Tests route generation
  - **Validate CSV** - Validates loaded CSV data
- Bypass clustering checkbox (for future use)
- Debug output display (terminal-style)

## Example Debug URLs

### WPS Debug
```
/api/wps?debug=1&start=s;43.0,-2.6&end=e;43.1,-2.5&w0=a;43.02,-2.61&w1=b;43.03,-2.63&improveFor=time
```

### Routing Debug
```
/api/route?debug=1&origin=43.0,-2.6&destination=43.1,-2.5&via=43.02,-2.61&via=43.03,-2.63&routingMode=fast&return=polyline,summary,notices
```

## Server Logs

Check your terminal/console where `npm run dev` is running for:
- `[WPS Debug]` - Full WPS request and response details
- `[Routing Debug]` - Full Routing request and response details
- Full constructed HERE URLs (with API key visible server-side only)

## How to Use

1. Start the dev server: `npm run dev`
2. Open the app in browser
3. Click "🔧 Diagnostics" to expand the panel
4. Enter test coordinates or use defaults
5. Click any debug button to test
6. View results in the debug output box
7. Check server console for full unredacted URLs

## Diagnostic Envelope Format

```json
{
  "ok": boolean,
  "requestedUrl": "string (API key redacted)",
  "status": number,
  "elapsedMs": number,
  "json": object | null,
  "rawBody": "string (full response)"
}
```

## Notes

- No business logic was changed
- All existing functionality remains intact
- Debug mode is GET-only for easy browser testing
- API keys are never exposed to client
- Server logs show full unredacted URLs for debugging
