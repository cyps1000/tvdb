import { createContext } from "react";

/**
 * Imports interfaces
 */
import { SearchResult } from "./useSearch.types";

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
  updateSearchResults: (results: SearchResult[]) => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
