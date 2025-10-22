/**
 * Validation utilities for coordinates
 */

export function validLat(v: any): boolean {
  return Number.isFinite(v) && Math.abs(v) <= 90;
}

export function validLon(v: any): boolean {
  return Number.isFinite(v) && Math.abs(v) <= 180;
}

export interface CSVValidationResult {
  totalRows: number;
  keptAfterFilter: number;
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
  invalidCount: number;
}

export function validateCSVData(data: Array<{ lat: number; lon: number; wasteType?: string }>, wasteFilter?: string): CSVValidationResult {
  let keptAfterFilter = data.length;
  
  if (wasteFilter) {
    keptAfterFilter = data.filter(row => row.wasteType === wasteFilter).length;
  }
  
  let minLat = Infinity;
  let maxLat = -Infinity;
  let minLon = Infinity;
  let maxLon = -Infinity;
  let invalidCount = 0;
  
  data.forEach(row => {
    const lat = row.lat;
    const lon = row.lon;
    
    if (!validLat(lat) || !validLon(lon)) {
      invalidCount++;
    } else {
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLon = Math.min(minLon, lon);
      maxLon = Math.max(maxLon, lon);
    }
  });
  
  return {
    totalRows: data.length,
    keptAfterFilter,
    minLat: minLat === Infinity ? NaN : minLat,
    maxLat: maxLat === -Infinity ? NaN : maxLat,
    minLon: minLon === Infinity ? NaN : minLon,
    maxLon: maxLon === -Infinity ? NaN : maxLon,
    invalidCount
  };
}
