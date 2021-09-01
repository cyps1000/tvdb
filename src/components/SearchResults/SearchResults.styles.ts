/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  SearchResults: {
    display: "flex",
    justifyContent: "center",
  },
  Divider: {
    height: 1,
    width: "100%",
    backgroundColor: theme.palette.common.black,
    marginBottom: "1rem",
  },
}));

export { useStyles };
