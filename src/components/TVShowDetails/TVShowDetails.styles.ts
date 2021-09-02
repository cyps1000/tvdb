/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  TVShowDetails: {
    borderRadius: 10,
    margin: "1.4rem 0",
    padding: "2rem 2rem",
    width: "-webkit-fill-available",
    display: "flex",
    alignItems: "center",
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  detailsGrid: {
    [theme.breakpoints.down("sm")]: {
      "&:first-of-type": {
        borderBottom: `${theme.palette.text.secondary} 0.5px solid`,
      },
    },
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

export { useStyles };
