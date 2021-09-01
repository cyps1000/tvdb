/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  SearchForm: {
    borderRadius: 35,
    padding: "1rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    marginRight: "1rem",
  },
}));

export { useStyles };
