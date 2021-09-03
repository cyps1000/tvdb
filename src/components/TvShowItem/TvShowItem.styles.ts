/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& a": {
      textDecoration: "none",
    },
  },
  TvShowItem: {
    borderRadius: 15,
    padding: "2rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
    transition: "0.3s ease-in-out",

    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
    },
  },
  poster: {
    maxWidth: "100%",
    width: "170px",
    height: "auto",
    maxHeight: "250px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
  posterGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  contentGrid: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  networkDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    paddingTop: "2rem",
  },
}));

export { useStyles };
