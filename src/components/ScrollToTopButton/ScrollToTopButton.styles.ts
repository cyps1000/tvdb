/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  ScrollToTopButton: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    margin: "0.7rem",
  },
  fab: {
    color: theme.palette.text.secondary,
    background: theme.palette.common.white,
    borderRadius: 35,
    boxShadow: "1px 4px 13px #838383",
    height: 60,
    width: 60,
    "& svg": {
      fontSize: "2rem",
    },
    "&:hover": {
      background: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
}));

export { useStyles };
