/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Title: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingBottom: "2rem",
    "& svg": {
      marginRight: "0.5rem",
    },
  },
  appTitle: {
    fontFamily: "Oswald",
    letterSpacing: "0.1rem",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}));

export { useStyles };
