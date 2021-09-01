import { Fragment } from "react";

/**
 * Imports components
 */
import { SearchPage } from "../SearchPage";
import { TvShowList } from "../TvShowList";

/**
 * Imports Material UI components
 */
import { Grid, Box, Typography } from "@material-ui/core";

/**
 * Imports hooks
 */
import { useTvShow } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./SearchResults.styles";

/**
 * Displays the component
 */
export const SearchResults: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { tvShows } = useTvShow();

  const matchResults = () => {
    const match = window.sessionStorage.getItem("index");

    return tvShows.length > 0 ? (
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Found {tvShows.length} {tvShows.length === 1 ? "result" : "results"}{" "}
        matching "{match}"{" "}
      </Typography>
    ) : (
      <Typography variant="h6" color="textSecondary" gutterBottom>
        No results
      </Typography>
    );
  };

  return (
    <Fragment>
      <SearchPage />
      <div className={classes.SearchResults}>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          xs={11}
          sm={10}
          md={9}
          lg={8}
          xl={7}
        >
          {matchResults()}
          <Box className={classes.Divider} />
          <TvShowList />
        </Grid>
      </div>
    </Fragment>
  );
};
