import React, { useState } from "react";

/**
 * Imports the context
 */
import { context, defaultValues, ProviderValues } from "./Context";

/**
 * Imports interfaces
 */
import { TVShow } from "./useTvShow.types";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const TVShowProvider: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Handles the Tv Show state
   */
  const [tvShow, setTvShow] = useState<TVShow>(defaultValues.tvShow);

  /**
   * Handles the loading state
   */
  const [loading, setLoading] = useState(defaultValues.loading);

  /**
   * Handles updating the search results state
   */
  const updateTVShow = (show: TVShow) => {
    setTvShow(show);
  };

  /**
   * Handles updating the loading state
   */
  const updateLoading = (loading: boolean) => {
    setLoading(loading);
  };

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    tvShow,
    loading,
    updateLoading,
    updateTVShow,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
