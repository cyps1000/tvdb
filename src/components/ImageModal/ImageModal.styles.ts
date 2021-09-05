/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  ImageModal: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    background: theme.palette.grey[900],
    overflow: "hidden",
  },
  dialogTitle: {
    background: theme.palette.grey[900],
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
  banner: {
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    maxHeight: "auto",
  },
  icon: {
    background: theme.palette.text.secondary,
    height: "1.5rem",
    width: "1.5rem",
    color: theme.palette.primary.contrastText,
    borderRadius: "50%",
    padding: 2,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export { useStyles };
