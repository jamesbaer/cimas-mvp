# Rendering Fix - Matching HTML Viewer

## Problem
The Next.js app was drawing straight lines or nothing, while the HTML viewer rendered proper polylines.

## Solution
Replaced all rendering code to **exactly match** the HTML viewer implementation.

## Changes Made

### 1. Polyline Decoder (`/lib/polyline.ts`)
**Replaced with exact HTML viewer decoder:**
- Uses HERE charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`
- Decodes version 1 flexible polylines
- Handles precision and third dimension properly
- Returns `[number, number][]` (lat/lng pairs)

### 2. Map Component (`/components/Map.tsx`)
**Complete rewrite to match HTML viewer:**
- SSR-safe Leaflet initialization
- Single map instance with reusable overlays
- `renderRoutingJson()` method that:
  - Clears previous overlays
  - Decodes `sections[].polyline` with flex decoder
  - Extracts coordinates from `place.originalLocation || place.location`
  - Draws numbered markers for start + arrivals
  - Falls back to straight lines if no polyline
  - Fits bounds after rendering

**Key helper function:**
```typescript
const getLL = (place: any) => {
  const p = place?.originalLocation || place?.location || place;
  if (!p || typeof p.lat !== 'number' || typeof p.lng !== 'number') return null;
  return [p.lat, p.lng] as [number, number];
};
```

### 3. Page Component (`/app/page.tsx`)
**Simplified to render test page:**
- Textarea for pasting Routing v8 JSON
- "Render JSON" button - renders pasted JSON
- "Test API Route" button - fetches from `/api/route` and renders
- "Clear" button - clears overlays

### 4. Marker Styling (`/app/globals.css`)
**Added numbered marker CSS:**
```css
.num-icon {
  width: 22px;
  height: 22px;
  background: #1f2937;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,.2);
}
```

## How to Test

### Method 1: Test API Route
1. Open the app
2. Click "Test API Route"
3. Route should appear with proper polyline and numbered markers

### Method 2: Paste JSON
1. Get Routing v8 JSON from `/api/route?debug=1&origin=...&destination=...&via=...`
2. Copy the `rawBody` from the debug response
3. Paste into textarea
4. Click "Render JSON"

## What Fixed the "Flat Line" Issue

1. **Correct polyline decoder** - Was using wrong charset or algorithm
2. **Check originalLocation first** - HERE sometimes puts coordinates there
3. **Proper coordinate extraction** - `place?.originalLocation || place?.location`
4. **Decode each section's polyline** - Not trying to decode summary or wrong field
5. **SSR-safe Leaflet** - Dynamic import prevents server-side rendering issues

## Verification

The rendered route should now:
- ✅ Show curved polyline following roads (not straight line)
- ✅ Display numbered markers at start and each stop
- ✅ Fit bounds to show entire route
- ✅ Match the HTML viewer output exactly

## Common Issues Avoided

- ❌ Using Google's polyline decoder (different format)
- ❌ Looking only at `place.location` (missing `originalLocation`)
- ❌ Trying to decode `route.polyline` (doesn't exist in v8)
- ❌ Not handling missing polylines (fallback to straight line)
- ❌ SSR rendering Leaflet (causes hydration errors)
