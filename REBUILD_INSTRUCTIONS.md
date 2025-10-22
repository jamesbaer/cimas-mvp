# Rebuild Instructions

The page.tsx file was accidentally corrupted and reverted to the Next.js template.

## What needs to be rebuilt:

1. **Full application UI** with:
   - CSV upload
   - Waste type selector
   - Cochera/Planta coordinates
   - Max stops input
   - Parse CSV button
   - Cluster waypoints button
   - Generate routes button

2. **Diagnostics panel** with:
   - Test waypoint inputs (origin, via1, via2, destination)
   - Run WPS Debug button
   - Run Routing Debug button
   - **Run Render Debug button** (NEW - this is what we were working on)
   - Validate CSV button
   - Debug output display

3. **Render Debug Function** that:
   - Fetches from `/api/route` with test waypoints
   - Parses HERE Routing v8 response
   - Uses `getLatLngFromPlace` helper (checks originalLocation OR location)
   - Decodes polylines from `sections[].polyline`
   - Extracts waypoints from `sections[].departure/arrival.place`
   - Falls back to straight lines if no polyline
   - Safely handles missing `route.summary`
   - Renders on map

## Key fix needed:

The `handleRunRenderDebug` function must match the reference viewer pattern exactly.

Since this is a large rebuild, I recommend:
1. Restore from a backup if available
2. OR rebuild incrementally starting with the basic UI
3. Then add the diagnostics panel
4. Finally add the render debug function

The render debug function should follow this pattern from the reference:
```javascript
const getLatLngFromPlace = (place) => {
  const p = place?.originalLocation || place?.location || place || null;
  if (!p || typeof p.lat !== 'number' || typeof p.lng !== 'number') return null;
  return [p.lat, p.lng];
};
```
