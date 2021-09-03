/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  SeasonMenu: {
    display: "flex",
    alignSelf: "flex-start",
    borderRadius: 5,
    boxShadow: "1px 4px 13px #838383",
    minWidth: "150px",
  },
}));

export { useStyles };
