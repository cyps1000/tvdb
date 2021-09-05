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
 * Imports interfaces
 */
import { TitleProps } from "./Title.types";

/**
 * Defines the default props
 */
const defaultProps: TitleProps = {
  showDescription: true,
};

/**
 * Displays the component
 */
export const Title: React.FC<TitleProps> = (props) => {
  const { showDescription } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box className={classes.Title}>
      <Typography variant="h2" gutterBottom className={classes.appTitle}>
        <Link to="/">TVDB</Link>
      </Typography>
      {showDescription && (
        <Typography variant="h5">Search for your favorite TV Shows!</Typography>
      )}
    </Box>
  );
};

Title.defaultProps = defaultProps;
