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
  network?: string | null;
  webChannel?: string | null;
  siteRating?: number;
  overview?: string | null;
  seasons?: Season[];
  seasonsCount: number;
}

/**
 * Defines the Season interface
 */
export interface Season {
  id: number;
  number: number | null;
}
