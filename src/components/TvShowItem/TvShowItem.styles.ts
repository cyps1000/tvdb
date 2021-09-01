/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  TvShowItem: {
    borderRadius: 15,
    padding: "1rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
  },
  poster: {
    maxWidth: "100%",
    width: "170px",
    height: "auto",
    maxHeight: "250",
  },
  posterGrid: {
    display: "flex",
    alignItems: "center",
  },
  networkDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    paddingTop: "1rem",
  },
}));

export { useStyles };
