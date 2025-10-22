export interface ClusteredWaypoint {
  id: string;
  lat: number;
  lon: number;
  cluster: number;
  wasteType: string;
}

/**
 * Calculate Haversine distance between two points in kilometers
 */
function haversineDistance(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number }
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);

  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);

  const h =
    sinLat * sinLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLon * sinLon;

  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/**
 * K-means clustering for geographic waypoints
 * Groups waypoints into K clusters based on geographic proximity
 * 
 * @param waypoints - Array of waypoints with lat/lon
 * @param k - Number of clusters (routes)
 * @param maxIterations - Maximum iterations for convergence
 * @returns Array of waypoints with cluster assignments
 */
export function clusterWaypoints(
  waypoints: Array<{ id: string; lat: number; lon: number; wasteType: string }>,
  k: number,
  maxIterations: number = 20
): ClusteredWaypoint[] {
  if (k <= 1 || waypoints.length <= k) {
    // If k=1 or fewer waypoints than clusters, assign each to its own cluster
    return waypoints.map((wp, i) => ({
      ...wp,
      cluster: Math.min(i, k - 1),
    }));
  }

  // Initialize centroids using K-means++ for better spread
  const centroids: Array<{ lat: number; lon: number }> = [];
  
  // Pick first centroid randomly
  const firstIdx = Math.floor(Math.random() * waypoints.length);
  centroids.push({ lat: waypoints[firstIdx].lat, lon: waypoints[firstIdx].lon });
  
  // Pick remaining centroids based on distance from existing ones
  while (centroids.length < k) {
    const distances = waypoints.map(wp => {
      // Find minimum distance to any existing centroid
      let minDist = Infinity;
      for (const centroid of centroids) {
        const dist = haversineDistance(wp, centroid);
        minDist = Math.min(minDist, dist);
      }
      return minDist;
    });
    
    // Pick the waypoint that is furthest from all centroids
    let maxDist = -1;
    let maxIdx = 0;
    for (let i = 0; i < distances.length; i++) {
      if (distances[i] > maxDist) {
        maxDist = distances[i];
        maxIdx = i;
      }
    }
    
    centroids.push({ lat: waypoints[maxIdx].lat, lon: waypoints[maxIdx].lon });
  }

  let assignments = new Array(waypoints.length).fill(0);

  // K-means iterations
  for (let iter = 0; iter < maxIterations; iter++) {
    // Assignment step: assign each waypoint to nearest centroid
    for (let i = 0; i < waypoints.length; i++) {
      let bestCluster = 0;
      let bestDistance = Infinity;

      for (let c = 0; c < k; c++) {
        const dist = haversineDistance(waypoints[i], centroids[c]);
        if (dist < bestDistance) {
          bestDistance = dist;
          bestCluster = c;
        }
      }

      assignments[i] = bestCluster;
    }

    // Update step: recompute centroids
    const sums = Array.from({ length: k }, () => ({ lat: 0, lon: 0, count: 0 }));

    for (let i = 0; i < waypoints.length; i++) {
      const cluster = assignments[i];
      sums[cluster].lat += waypoints[i].lat;
      sums[cluster].lon += waypoints[i].lon;
      sums[cluster].count++;
    }

    for (let c = 0; c < k; c++) {
      if (sums[c].count > 0) {
        centroids[c].lat = sums[c].lat / sums[c].count;
        centroids[c].lon = sums[c].lon / sums[c].count;
      }
    }
  }

  // Return waypoints with cluster assignments
  return waypoints.map((wp, i) => ({
    ...wp,
    cluster: assignments[i],
  }));
}

/**
 * Calculate optimal number of clusters based on max stops per route
 */
export function calculateOptimalClusters(
  totalWaypoints: number,
  maxStopsPerRoute?: number,
  manualK?: number
): number {
  if (manualK && manualK > 0) {
    return manualK;
  }

  if (maxStopsPerRoute && maxStopsPerRoute > 0) {
    return Math.max(1, Math.ceil(totalWaypoints / maxStopsPerRoute));
  }

  // Default: single route
  return 1;
}

/**
 * Constrained clustering that respects max stops per route
 * Uses K-means as initial clustering, then rebalances to respect constraints
 * Moves waypoints that are CLOSEST to other clusters (not furthest from own)
 */
export function clusterWithConstraints(
  waypoints: Array<{ id: string; lat: number; lon: number; wasteType: string }>,
  maxStopsPerRoute: number
): ClusteredWaypoint[] {
  if (waypoints.length === 0) return [];
  if (waypoints.length <= maxStopsPerRoute) {
    return waypoints.map(wp => ({ ...wp, cluster: 0 }));
  }

  // Calculate number of routes needed
  const k = Math.ceil(waypoints.length / maxStopsPerRoute);
  
  // Start with K-means clustering
  let clustered = clusterWaypoints(waypoints, k);
  
  // Rebalance: move waypoints from oversized clusters to undersized ones
  let changed = true;
  let iterations = 0;
  const maxIterations = 10;
  
  while (changed && iterations < maxIterations) {
    changed = false;
    iterations++;
    
    // Count waypoints per cluster
    const clusterSizes = new Array(k).fill(0);
    clustered.forEach(wp => clusterSizes[wp.cluster]++);
    
    // Find oversized and undersized clusters
    const oversized = clusterSizes
      .map((size, idx) => ({ idx, size, excess: size - maxStopsPerRoute }))
      .filter(c => c.excess > 0)
      .sort((a, b) => b.excess - a.excess);
    
    const undersized = clusterSizes
      .map((size, idx) => ({ idx, size, capacity: maxStopsPerRoute - size }))
      .filter(c => c.capacity > 0)
      .sort((a, b) => b.capacity - a.capacity);
    
    if (oversized.length === 0 || undersized.length === 0) break;
    
    // Calculate centroid of each cluster
    const centroids = new Array(k).fill(null).map((_, c) => {
      const wps = clustered.filter(wp => wp.cluster === c);
      if (wps.length === 0) return { lat: 0, lon: 0 };
      return {
        lat: wps.reduce((sum, wp) => sum + wp.lat, 0) / wps.length,
        lon: wps.reduce((sum, wp) => sum + wp.lon, 0) / wps.length,
      };
    });
    
    // Move waypoints from oversized to undersized clusters
    for (const over of oversized) {
      const waypointsInCluster = clustered.filter(wp => wp.cluster === over.idx);
      
      // For each waypoint, find which undersized cluster it's closest to
      const candidates = waypointsInCluster
        .map(wp => {
          let nearestCluster = -1;
          let nearestDist = Infinity;
          
          for (const under of undersized) {
            if (clusterSizes[under.idx] >= maxStopsPerRoute) continue;
            const dist = haversineDistance(wp, centroids[under.idx]);
            if (dist < nearestDist) {
              nearestDist = dist;
              nearestCluster = under.idx;
            }
          }
          
          return {
            wp,
            targetCluster: nearestCluster,
            distToTarget: nearestDist,
          };
        })
        .filter(c => c.targetCluster >= 0)
        .sort((a, b) => a.distToTarget - b.distToTarget); // Closest first!
      
      // Move waypoints that are closest to other clusters
      let moved = 0;
      for (const candidate of candidates) {
        if (moved >= over.excess) break;
        if (clusterSizes[candidate.targetCluster] >= maxStopsPerRoute) continue;
        
        const idx = clustered.findIndex(wp => wp.id === candidate.wp.id);
        if (idx >= 0) {
          clustered[idx].cluster = candidate.targetCluster;
          clusterSizes[over.idx]--;
          clusterSizes[candidate.targetCluster]++;
          moved++;
          changed = true;
        }
      }
    }
  }
  
  return clustered;
}
