import { useEffect, useState } from "react";

/**
 * External Imports
 */
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
import { useHistory, useParams } from "react-router-dom";
import { useSearch } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./SearchForm.styles";

/**
 * Imports interfaces
 */
import { ResultResponse } from "./SearchForm.types";

/**
 * Displays the component
 */
export const SearchForm: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the history hook
   */
  const { push, location } = useHistory();

  /**
   * Inits the useParams hook
   */
  const { name } = useParams<{ name: string }>();

  /**
   * Inits the tv show hook
   */
  const { updateSearchResults, searchResults } = useSearch();

  /**
   * Inits the search state
   */
  const [input, setInput] = useState<string>(name ? name : "");

  /**
   * Handles searching for a show by name
   */
  const searchShows = async (input: string) => {
    const { data } = await axios.get<ResultResponse[]>(
      `https://api.tvmaze.com/search/shows?q=${input}`
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

      return push(`/search/${input}`);
    }
  };

  /**
   * Handles the event source when the value is changed
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  /**
   * Handles searching when the Enter key is pressed
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.length > 2) {
      searchShows(input);
    }
  };

  /**
   * Handles searching for shows
   */
  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    if (input.length > 2) {
      e.preventDefault();
      searchShows(input);
    }
  };

  useEffect(() => {
    if (searchResults.length < 1 && location.pathname === `/search/${name}`) {
      searchShows(name);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Paper elevation={10} className={classes.SearchForm}>
      <IconButton
        color="primary"
        size="small"
        className={classes.iconButton}
        onClick={onSubmit}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        id="search-shows"
        fullWidth
        autoComplete="off"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </Paper>
  );
};
