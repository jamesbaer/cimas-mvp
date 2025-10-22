# Rendering Debug - Implementation Summary

## Overview

Added client-side rendering debug mode to inspect how polylines and markers are rendered on the map. This helps diagnose coordinate issues, bounds problems, and rendering performance.

## What Was Added

### 1. Safe Polyline Decoding (`/lib/polyline.ts`)

**`safeDecode(encoded: string): SafeDecodeResult`**
- Wraps `decodeFlexPolyline` with comprehensive error handling
- Validates all coordinates:
  - Checks for finite numbers
  - Validates latitude range (-90 to 90)
  - Validates longitude range (-180 to 180)
- Returns `{ ok: boolean; coords?: [number, number][]; error?: string }`
- Prevents invalid coordinates from reaching the map

### 2. Map Component Debug Methods (`/components/Map.tsx`)

**Exposed via `useImperativeHandle`:**

**`drawRoute(name, encodedPolylines, markers?)`**
- Decodes each polyline section with `safeDecode`
- Validates and filters coordinates
- Creates feature group with polylines and markers
- Computes bounds and centers map
- Tracks timing and errors
- Emits debug info via callback and `window.__routeDebug`

**`clearOverlays()`**
- Removes all route layers (preserves base tiles)
- Resets color index
- Clears global debug storage

**Debug Information Captured:**
- Route ID
- Number of sections
- Total decoded coordinates
- First/last 3 coordinates
- Computed bounds (SW, NE, center)
- Layer counts (polylines, markers)
- Draw time in milliseconds
- Any errors encountered

### 3. Rendering Debug UI (`page.tsx`)

**New Panel: "🎨 Rendering Debug"**

Located in the sidebar after the Diagnostics panel:

- **Toggle**: Show/hide rendering debug info
- **Clear Layers Button**: Removes all overlays without touching base map
- **Debug Info Display**:
  - Route ID
  - Sections count
  - Total coordinates
  - First 3 coordinates (JSON)
  - Last 3 coordinates (JSON)
  - Bounds (southWest, northEast, center)
  - Layer counts (polylines, markers)
  - Draw time (ms)
  - Errors list (if any)

## How to Use

### 1. Enable Rendering Debug

1. Open the app
2. Scroll down in the sidebar
3. Click "🎨 Rendering Debug" to expand
4. The panel will now capture debug info on every route render

### 2. Generate Routes

1. Upload CSV and configure parameters
2. Click "Process CSV" → "Cluster Waypoints" → "Generate Routes"
3. Watch the Rendering Debug panel populate with info

### 3. Inspect Debug Info

The panel shows:
- **Sections**: How many polyline sections were in the route
- **Total Coords**: How many coordinate pairs were decoded
- **First/Last 3**: Sample coordinates to verify they're in the right region
- **Bounds**: The computed map bounds (check for (0,0) spider issues)
- **Layers**: Confirm polylines and markers were created
- **Draw Time**: Performance metric
- **Errors**: Any decode or validation failures

### 4. Clear Layers

Click "Clear Layers" to remove all routes and start fresh without reloading the page.

### 5. Browser Console

Open browser DevTools console to see:
- `[Map] drawRoute debug:` - Full debug object for each route
- `window.__routeDebug` - Array of all debug info (accessible in console)

## Common Issues Diagnosed

### Spider to (0,0)
**Symptom**: Map shows lines radiating from null island (0°, 0°)  
**Check**: 
- Bounds in debug panel - are they null or invalid?
- Errors list - coordinate validation failures?
- First/Last coords - are they in expected region?

### No Polylines Visible
**Symptom**: Routes don't appear on map  
**Check**:
- Layer counts - are polylines > 0?
- Total coords - is it > 0?
- Errors list - decode failures?

### Wrong Region
**Symptom**: Map centers on wrong area  
**Check**:
- Bounds center - is it in expected region?
- First/Last coords - verify lat/lon values

### Performance Issues
**Symptom**: Slow rendering  
**Check**:
- Draw time - how many ms?
- Total coords - is the polyline too detailed?

## Example Debug Output

```json
{
  "routeId": "Route 1",
  "sectionsCount": 1,
  "totalCoordinates": 245,
  "firstCoords": [
    [43.0, -2.6],
    [43.001, -2.601],
    [43.002, -2.602]
  ],
  "lastCoords": [
    [43.098, -2.498],
    [43.099, -2.499],
    [43.1, -2.5]
  ],
  "bounds": {
    "southWest": [43.0, -2.63],
    "northEast": [43.1, -2.5],
    "center": [43.05, -2.565]
  },
  "layerCounts": {
    "polylines": 1,
    "markers": 4
  },
  "drawTimeMs": 12.34,
  "errors": []
}
```

## Global Debug Storage

All render debug info is stored in `window.__routeDebug[]` for inspection in browser console:

```javascript
// In browser console:
window.__routeDebug
// Returns array of all RenderDebugInfo objects

// Get latest render:
window.__routeDebug[window.__routeDebug.length - 1]

// Check for errors:
window.__routeDebug.filter(d => d.errors.length > 0)
```

## Notes

- No API changes were made
- Existing route rendering logic preserved
- Debug mode is purely additive
- All coordinate validation happens before rendering
- Bounds computation uses Leaflet's built-in methods
