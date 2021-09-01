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
import { useTvShow } from "../../hooks";

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

  const { tvShows } = useTvShow();

  return (
    <Fragment>
      {tvShows.length > 0 &&
        tvShows.map((tvShow) => <TvShowItem key={v4()} tvShow={tvShow} />)}
    </Fragment>
  );
};
