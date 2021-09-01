/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  SearchPage: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export { useStyles };
