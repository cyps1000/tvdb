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
import { useParams } from "react-router-dom";
import { useSearch } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./SearchResults.styles";

/**
 * Defines the params types interface
 */
export interface ParamTypes {
  name: string;
}

/**
 * Displays the component
 */
export const SearchResults: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the useSearch hook
   */
  const { searchResults } = useSearch();

  /**
   * Inits the useParams hook
   */
  const { name } = useParams<ParamTypes>();

  /**
   * Handles rendering a Typography component based
   * on the search results
   */
  const matchResults = () => {
    return searchResults.length > 0 ? (
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Found {searchResults.length}{" "}
        {searchResults.length === 1 ? "result" : "results"} matching "{name}"{" "}
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
          item
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
