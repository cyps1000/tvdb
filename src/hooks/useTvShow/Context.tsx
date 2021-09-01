import { createContext } from "react";

/**
 * Defines the TV Show interface
 */
export interface TvShow {
  show: {
    id: number;
    name: string;
    genre: string[];
    status: string;
    premiered: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    network: {
      name: string;
    } | null;
    image: {
      original: string;
    } | null;
    summary: string;
    banner: string | null;
  };
}

/**
 * Defines the default values interface
 */
export interface ProviderValues {
  tvShow: TvShow;
  tvShows: TvShow[];
  loading: boolean;
  searchInput: string;
  updateLoading: (loading: boolean) => void;
  updateSearchInput: (value: string) => void;
  updateTvShow: (show: TvShow) => void;
  updateTvShows: (shows: TvShow[]) => void;
}

/**
 * Init the default values
 */
export const defaultValues: ProviderValues = {
  tvShow: {
    show: {
      id: 0,
      name: "",
      genre: [],
      status: "",
      premiered: "",
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: 0,
      },
      network: {
        name: "",
      },
      image: {
        original: "",
      },
      summary: "",
      banner: "",
    },
  },
  tvShows: [],
  loading: true,
  searchInput: "",
  updateLoading: (loading: boolean) => {},
  updateSearchInput: (value: string) => {},
  updateTvShow: (show: TvShow) => {},
  updateTvShows: (shows: TvShow[]) => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
