/**
 * Imports Material UI Components
 */
import { CircularProgress } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./Spinner.styles";

/**
 * Displays the component
 */
export const Spinner: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
