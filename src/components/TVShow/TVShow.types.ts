/**
 * Defines the params types interface
 */
export interface ParamTypes {
  id: string;
}

/**
 * Defines the Season response interface
 */
export interface SeasonResponse {
  id: number;
  number: number | null;
}

/**
 * Defines the Tv Show response interface
 */
export interface TVShowResponse {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  status: string;
  schedule: {
    time: string;
    days: string[];
  };
  genres: string[];
  network: {
    name: string;
  } | null;
  webChannel: {
    name: string;
  } | null;
  rating: {
    average: number;
  };
  summary: string | null;
  _embedded: {
    seasons: SeasonResponse[];
  };
}
