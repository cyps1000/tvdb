/**
 * Defines the Search Results interface
 */
export interface SearchResult {
  id: number;
  name: string;
  firstAired: string;
  network: string | null;
  webChannel: string | null;
  overview: string | null;
  poster: string | null;
}
