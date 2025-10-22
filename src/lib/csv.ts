import Papa from 'papaparse';

export interface WasteType {
  value: string;
  label: string;
}

export const WASTE_TYPES: WasteType[] = [
  { value: 'Envase final', label: 'Envase' },
  { value: 'Resto final', label: 'Resto' },
  { value: 'Papel final', label: 'Papel' },
  { value: 'Reutilizables final', label: 'Reutilizables' },
  { value: 'Vidrio final', label: 'Vidrio' },
  { value: 'Aceite final', label: 'Aceite' },
];

export interface Waypoint {
  id: string;
  lat: number;
  lon: number;
  wasteType: string;
}

export interface ParseResult {
  totalRows: number;
  filteredRows: number;
  waypoints: Waypoint[];
  errors: string[];
}

/**
 * Parse CSV file and filter by waste type
 * Expected columns:
 * - Latitude (or lat, Lat, A)
 * - Longitude (or lon, lng, Lon, Long, B)
 * - Envase Final, Resto Final, Papel Final, Reutilizables Final, Vidrio Final, Aceite Final
 * 
 * Filters rows where the selected waste type column contains "Si"
 */
export function parseCSV(
  file: File,
  wasteTypeColumn: string
): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    const errors: string[] = [];
    
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data as any[];
          const totalRows = data.length;
          
          if (totalRows === 0) {
            resolve({
              totalRows: 0,
              filteredRows: 0,
              waypoints: [],
              errors: ['CSV file is empty']
            });
            return;
          }

          // Debug: Log first row and column names
          if (data.length > 0) {
            console.log('First row:', data[0]);
            console.log('Available columns:', Object.keys(data[0]));
            console.log('Looking for column:', wasteTypeColumn);
            console.log('Value in that column:', data[0][wasteTypeColumn]);
          }

          // Parse and filter waypoints
          const waypoints: Waypoint[] = [];
          
          data.forEach((row, index) => {
            // Check if this row has "Si" in the selected waste type column
            const wasteValue = String(row[wasteTypeColumn] || '').trim().toLowerCase();
            if (wasteValue !== 'si') {
              return; // Skip this row
            }

            // Extract lat/lon with fallbacks
            const lat = getLatitude(row);
            const lon = getLongitude(row);

            if (isNaN(lat) || isNaN(lon)) {
              errors.push(`Row ${index + 2}: Invalid coordinates (lat: ${lat}, lon: ${lon})`);
              return;
            }

            waypoints.push({
              id: row.id || row.ID || `waypoint-${index + 1}`,
              lat,
              lon,
              wasteType: wasteTypeColumn
            });
          });

          resolve({
            totalRows,
            filteredRows: waypoints.length,
            waypoints,
            errors
          });
        } catch (error) {
          reject(error);
        }
      },
      error: (error) => {
        reject(new Error(`CSV parsing failed: ${error.message}`));
      }
    });
  });
}

/**
 * Extract latitude from row with multiple fallback column names
 */
function getLatitude(row: any): number {
  const lat = row['Latitude'] ?? row['Lat'] ?? row['lat'] ?? row['LAT'] ?? row['A'];
  return Number(lat);
}

/**
 * Extract longitude from row with multiple fallback column names
 */
function getLongitude(row: any): number {
  const lon = row['Longitude'] ?? row['Lon'] ?? row['lon'] ?? row['lng'] ?? row['long'] ?? row['Long'] ?? row['LON'] ?? row['B'];
  return Number(lon);
}
