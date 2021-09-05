import { Fragment } from "react";

/**
 * Imports components
 */
import { TvShowItem } from "../TvShowItem";

/**
 * Imports hooks
 */
import { useSearch } from "../../hooks";

/**
 * Displays the component
 */
export const TvShowList: React.FC = () => {
  /**
   * Inits the useSearch hook
   */
  const { searchResults } = useSearch();

  /**
   * Handles rendering the search results
   */
  const showSearchResults = searchResults.map((result) => (
    <TvShowItem key={result.id} result={result} />
  ));

  return <Fragment>{showSearchResults}</Fragment>;
};
