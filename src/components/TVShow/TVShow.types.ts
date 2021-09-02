/**
 * Defines the params types interface
 */
export interface ParamTypes {
  id: string;
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
  rating: {
    average: number;
  };
  summary: string | null;
}
