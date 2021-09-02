/**
 * Defines the TV Show interface
 */
export interface TVShow {
  id?: number;
  name?: string;
  poster?: string | null;
  status?: string | null;
  airsTime?: string;
  airsDayOfWeek?: string[];
  genre?: string[];
  siteRating?: number;
  overview?: string | null;
  seasons?: Season[];
}

/**
 * Defines the Episode interface
 */
export interface Episode {
  name: string | null;
  season: number;
  number: number;
  firstAired: string | null;
  image: string | null;
  overview: string | null;
  runtime: number;
}

/**
 * Defines the Season interface
 */
export interface Season {
  number: number;
  episodes: Episode[];
}
