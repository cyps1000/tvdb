/**
 * Defines the Episode Response interface
 */
export interface EpisodeResponse {
  id: number;
  name: string;
  number: number;
  season: number;
  airdate: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
}

/**
 * Defines the Episode interface
 */
export interface Episode {
  id: number;
  name: string;
  number: number;
  season: number;
  firstAired: string;
  runtime: number;
  image: string | null;
  overview: string | null;
}
