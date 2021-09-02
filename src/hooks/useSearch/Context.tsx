import { createContext } from "react";

/**
 * Defines the TV Show interface
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

/**
 * Defines the default values interface
 */
export interface ProviderValues {
  searchResults: SearchResult[];
  loading: boolean;
  searchInput: string;
  updateLoading: (loading: boolean) => void;
  updateSearchInput: (value: string) => void;
  updateSearchResults: (shows: SearchResult[]) => void;
}

/**
 * Init the default values
 */
export const defaultValues: ProviderValues = {
  searchResults: [],
  loading: true,
  searchInput: "",
  updateLoading: (loading: boolean) => {},
  updateSearchInput: (value: string) => {},
  updateSearchResults: (shows: SearchResult[]) => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
