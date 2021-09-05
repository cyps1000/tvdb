/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  Modal: {},
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem",
    borderBottom: "1px solid #e2e2e2",
  },
  banner: {
    maxWidth: "100%",
    width: "600px",
    height: "auto",
    maxHeight: "auto",
    borderRadius: 5,
  },
  text: {
    lineHeight: 0,
  },
  modalContent: {
    paddingTop: "1.5rem",
  },
  icon: {
    background: theme.palette.text.secondary,
    height: "1.5rem",
    width: "1.5rem",
    color: theme.palette.primary.contrastText,
    borderRadius: "50%",
    padding: 1,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export { useStyles };
