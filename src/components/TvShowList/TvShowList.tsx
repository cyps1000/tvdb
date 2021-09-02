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
 * Imports the component styles
 */
//import { useStyles } from "./TvShowList.styles";

/**
 * Displays the component
 */
export const TvShowList: React.FC = () => {
  /**
   * Gets the component styles
   */
  //const classes = useStyles();

  const { searchResults } = useSearch();

  return (
    <Fragment>
      {searchResults.length > 0 &&
        searchResults.map((result) => (
          <TvShowItem key={v4()} result={result} />
        ))}
    </Fragment>
  );
};
