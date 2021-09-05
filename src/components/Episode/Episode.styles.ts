/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Episode: {
    margin: "0.5rem 0",
    padding: "1rem 1rem",
    transition: "0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
    },
  },
  banner: {
    maxWidth: "100%",
    width: "600px",
    height: "auto",
    maxHeight: "auto",
    borderRadius: 5,
  },
  posterGrid: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

export { useStyles };
