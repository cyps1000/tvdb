import { Fragment } from "react";

/**
 * External imports
 */
import { v4 } from "uuid";

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
  const showSearchResults =
    searchResults.length > 0 &&
    searchResults.map((result) => <TvShowItem key={v4()} result={result} />);

  return <Fragment>{showSearchResults}</Fragment>;
};
