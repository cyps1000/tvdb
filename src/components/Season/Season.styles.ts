/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Season: {},
  episodesContainer: {
    borderRadius: 10,
    margin: "2rem 0",
    padding: "2rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    color: theme.palette.text.secondary,
    width: "inherit",
  },
}));

export { useStyles };
