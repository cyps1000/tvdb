import React, { useState } from "react";

/**
 * Imports the context
 */
import {
  context,
  defaultValues,
  SearchResult,
  ProviderValues,
} from "./Context";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const SearchProvider: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Handles the search results state
   */
  const [searchResults, setSearchResults] = useState<SearchResult[]>(
    defaultValues.searchResults
  );

  /**
   * Handles the loading state
   */
  const [loading, setLoading] = useState(defaultValues.loading);

  /**
   * Handles the search input state
   */
  const [searchInput, setSearchInput] = useState(defaultValues.searchInput);

  /**
   * Handles updating the search results state
   */
  const updateSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  /**
   * Handles updating the loading state
   */
  const updateLoading = (loading: boolean) => {
    setLoading(loading);
  };

  /**
   * Handles updating the search input state
   */
  const updateSearchInput = (value: string) => {
    setSearchInput(value);
  };

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    searchResults,
    loading,
    searchInput,
    updateLoading,
    updateSearchInput,
    updateSearchResults,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
