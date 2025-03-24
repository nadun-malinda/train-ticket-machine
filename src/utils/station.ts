import { Station } from "@/types/station";

/**
 * Normalize station names to uppercase
 * @param station The station object
 * @returns A new station object with the station name in uppercase
 */
function normalizeStationName(station: Station): Station {
  return {
    ...station,
    stationName: station.stationName.toUpperCase(),
  };
}

/**
 * Given a search query and an array of stations, filters stations that start with the query
 * @param query The search query
 * @param stations Array of station objects
 * @returns Filtered array of stations with station names normalized
 */
export function filterStations(query: string, stations: Station[]): Station[] {
  // Normalize station names upfront to avoid repeating it
  const normalizedStations = stations.map(normalizeStationName);

  if (!query) {
    return normalizedStations;
  }

  const normalizedQuery = query.trim().toUpperCase();
  return normalizedStations.filter((station) =>
    station.stationName.startsWith(normalizedQuery)
  );
}

/**
 * Extracts all possible next characters from matching stations
 * @param query The current search query
 * @param stations Array of filtered station objects
 * @returns Array of valid next characters
 */
export function getNextValidCharacters(
  query: string,
  stations: Station[]
): string[] {
  // Trim and calculate query length once
  const queryLength = query.trimStart().length;
  const nextChars = new Set<string>();

  stations.forEach((station) => {
    const stationName = station.stationName;

    // Only process if queryLength is less than the station name's length
    if (queryLength < stationName.length) {
      nextChars.add(stationName[queryLength]);
    }
  });

  // Return the deduplicated characters as an array
  return Array.from(nextChars);
}
