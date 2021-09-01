/**
 * External Imports
 */
import { useHistory } from "react-router-dom";
import axios from "axios";

/**
 * Imports Material UI components
 */
import { Paper, InputBase, Icon } from "@material-ui/core";

/**
 * Imports Material UI Icons
 */
import SearchIcon from "@material-ui/icons/Search";

/**
 * Imports hooks
 */
import { useTvShow } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./SearchForm.styles";

/**
 * Defines the props interface
 */
export interface SearchFormProps {
  text?: string;
}

/**
 * Displays the component
 */
export const SearchForm: React.FC<SearchFormProps> = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the history hook
   */
  const { push } = useHistory();

  /**
   * Inits the tv show hook
   */
  const { searchInput, updateSearchInput, updateTvShows, updateLoading } =
    useTvShow();

  const searchShows = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchInput}`
    );

    if (data) {
      updateLoading(false);
      updateTvShows(data);

      return push(`/search/`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchInput(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchInput.length > 1) {
      searchShows();
      window.sessionStorage.setItem("index", searchInput);
    }
  };

  return (
    <Paper elevation={10} className={classes.SearchForm}>
      <Icon color="primary" className={classes.iconButton}>
        <SearchIcon />
      </Icon>

      <InputBase
        id="standard-secondary"
        color="primary"
        fullWidth
        value={searchInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </Paper>
  );
};
