import { Station } from "@/types/station";

/**
 * Given a search query and an array of stations, filters stations that start with the query
 * @param query The search query
 * @param stations Array of station objects
 * @returns Filtered array of stations
 */
export function filterStations(query: string, stations: Station[]): Station[] {
  if (!query) return stations;

  const normalizedQuery = query.trim().toUpperCase();
  return stations.filter((station) =>
    station.stationName.toUpperCase().startsWith(normalizedQuery)
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
  if (!stations.length) return [];

  const queryLength = query.trim().length;

  // Extract all possible next characters from matching stations
  const nextChars = stations.map((station) => {
    const stationName = station.stationName.toUpperCase();
    return queryLength < stationName.length ? stationName[queryLength] : null;
  });

  // Remove nulls and deduplicate
  return Array.from(
    new Set(nextChars.filter((char) => char !== null))
  ) as string[];
}
