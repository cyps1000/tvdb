/**
 * Imports components
 */
import { SearchForm } from "../SearchForm";
import { Title } from "../Title";

/**
 * Imports Material UI components
 */
import { Grid } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./SearchPage.styles";

/**
 * Displays the component
 */
export const SearchPage: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.SearchPage}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        xs={10}
        sm={9}
        md={8}
        lg={7}
        xl={6}
      >
        <Title />
        <SearchForm />
      </Grid>
    </div>
  );
};
