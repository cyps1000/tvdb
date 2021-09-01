import React, { useState } from "react";

/**
 * Imports the context
 */
import { context, defaultValues, TvShow, ProviderValues } from "./Context";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const TvShowProvider: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Handles the tv show state
   */
  const [tvShow, setTvShow] = useState<TvShow>(defaultValues.tvShow);

  /**
   * Handles the tv shows state
   */
  const [tvShows, setTvShows] = useState<TvShow[]>(defaultValues.tvShows);

  /**
   * Handles the loading state
   */
  const [loading, setLoading] = useState(defaultValues.loading);

  /**
   * Handles the search input state
   */
  const [searchInput, setSearchInput] = useState(defaultValues.searchInput);

  /**
   * Handles updating the tv show state
   */
  const updateTvShow = (tvShow: TvShow) => {
    setTvShow(tvShow);
  };

  /**
   * Handles updating the tv shows state
   */
  const updateTvShows = (tvShows: TvShow[]) => {
    setTvShows(tvShows);
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
    tvShow,
    tvShows,
    loading,
    searchInput,
    updateLoading,
    updateSearchInput,
    updateTvShows,
    updateTvShow,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
