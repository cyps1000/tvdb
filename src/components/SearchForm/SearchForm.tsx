/**
 * External Imports
 */
import { useHistory } from "react-router-dom";
import axios from "axios";

/**
 * Imports Material UI components
 */
import { Paper, InputBase, IconButton } from "@material-ui/core";

/**
 * Imports Material UI Icons
 */
import SearchIcon from "@material-ui/icons/Search";

/**
 * Imports hooks
 */
import { useSearch } from "../../hooks";

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

interface ResultResponse {
  show: {
    id: number;
    name: string;
    premiered: string;
    network: {
      name: string;
    } | null;
    webChannel: {
      name: string;
    } | null;
    image: {
      medium: string;
    } | null;
    summary: string | null;
  };
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
  const { searchInput, updateSearchInput, updateSearchResults, updateLoading } =
    useSearch();

  const searchShows = async () => {
    const { data } = await axios.get<ResultResponse[]>(
      `https://api.tvmaze.com/search/shows?q=${searchInput}`
    );

    if (data) {
      const searchResults = data.map((item: ResultResponse) => {
        return {
          id: item.show.id,
          name: item.show.name,
          firstAired: item.show.premiered,
          network: item.show.network ? item.show.network.name : null,
          webChannel: item.show.webChannel ? item.show.webChannel.name : null,
          overview: item.show.summary ? item.show.summary : null,
          poster: item.show.image ? item.show.image.medium : null,
        };
      });

      updateSearchResults(searchResults);
      updateLoading(false);

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
      <IconButton
        color="primary"
        size="small"
        className={classes.iconButton}
        onClick={searchShows}
      >
        <SearchIcon />
      </IconButton>

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
