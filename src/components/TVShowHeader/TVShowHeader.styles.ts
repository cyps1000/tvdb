/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  TVShowHeader: {
    borderRadius: 10,
    padding: "2rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
  },
  poster: {
    maxWidth: "100%",
    width: "600px",
    height: "auto",
    maxHeight: "840px",
    boxShadow: "1px 4px 13px #838383",
    borderRadius: 7,
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  posterGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  contentGrid: {
    display: "flex",
    flexDirection: "column",
  },
  showRating: {
    display: "flex",
    flexDirection: "row",
    "& h6": {
      paddingLeft: "1rem",
    },
  },
  genres: {
    "& div": {
      marginRight: "1rem",
      marginBottom: "1rem",
    },
  },
}));

export { useStyles };
