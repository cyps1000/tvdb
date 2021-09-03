/**
 * Imports Material UI components
 */
import { FormControl, Select, MenuItem } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./SeasonMenu.styles";

/**
 * Imports interfaces
 */
import { SeasonMenuProps } from "./SeasonMenu.types";

/**
 * Displays the component
 */
export const SeasonMenu: React.FC<SeasonMenuProps> = (props) => {
  const { seasonId, handleChange, show } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return seasonId && show.seasons ? (
    <FormControl variant="outlined" className={classes.SeasonMenu}>
      <Select
        labelId="select-season"
        id="select-season"
        value={seasonId}
        onChange={handleChange}
      >
        {show.seasons.map((season) => (
          <MenuItem key={season.id} value={season.id}>
            Season {season.number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ) : null;
};
