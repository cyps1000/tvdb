import { Link } from "react-router-dom";

/**
 * Imports Material UI components
 */
import { Box, Typography } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./Title.styles";

/**
 * Displays the component
 */
export const Title: React.FC = (pops) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box className={classes.Title}>
      <Typography variant="h2" gutterBottom className={classes.appTitle}>
        <Link to="/">TVDB</Link>
      </Typography>
      <Typography variant="h5">Search for your favorite TV Shows!</Typography>
    </Box>
  );
};
