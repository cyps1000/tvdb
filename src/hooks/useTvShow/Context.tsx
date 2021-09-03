import { createContext } from "react";

/**
 * Imports interfaces
 */
import { TVShow } from "./useTvShow.types";

/**
 * Defines the default values interface
 */
export interface ProviderValues {
  tvShow: TVShow;
  loading: boolean;
  updateLoading: (loading: boolean) => void;
  updateTVShow: (show: TVShow) => void;
}

/**
 * Init the default values
 */
export const defaultValues: ProviderValues = {
  tvShow: {
    id: 0,
    name: "",
    poster: "",
    status: "",
    airsTime: "",
    airsDayOfWeek: [],
    genre: [],
    siteRating: 0,
    overview: "",
    seasons: [],
    seasonsCount: 0,
  },
  loading: true,
  updateLoading: (loading: boolean) => {},
  updateTVShow: (show: TVShow) => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
