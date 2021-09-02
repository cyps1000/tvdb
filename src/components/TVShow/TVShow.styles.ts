/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  TVShow: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backButton: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: "1rem",
    backgroundColor: "#fff",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    color: "#7074e4",
    "&:hover": {
      backgroundColor: "#5d61ce",
      color: "#fff",
    },
  },
}));

export { useStyles };
