import { Fragment, useEffect, useState } from "react";

/**
 * External Imports
 */
import axios from "axios";

/**
 * Imports components
 */
import { Episode } from "../Episode";
import { SeasonMenu } from "../SeasonMenu";
import { Spinner } from "../Spinner";

/**
 * Imports Material UI components
 */
import { Paper, Typography } from "@material-ui/core";

/**
 * Imports hooks
 */
import { useTvShow } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Season.styles";

/**
 * Imports interfaces
 */
import { EpisodeResponse, Episode as IEpisode } from "./Season.types";

/**
 * Displays the component
 */
export const Season: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the useTvShow hook
   */
  const { tvShow } = useTvShow();

  /**
   * Inits the season menu state
   */
  const [seasonId, setSeasonId] = useState<number>();

  /**
   * Inits the episodes state
   */
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  /**
   * Inits the episode loading state
   */
  const [episodeLoading, setEpisodeLoading] = useState(true);

  /**
   * Handles fetching the TV Show episodes
   */
  const getEpisodes = async (id: number) => {
    const { data } = await axios.get<EpisodeResponse[]>(
      `https://api.tvmaze.com/seasons/${id}/episodes`
    );

    if (data) {
      const newData: IEpisode[] = data.map((episode) => {
        return {
          id: episode.id,
          name: episode.name && episode.name,
          number: episode.number,
          season: episode.season,
          firstAired: episode.airdate && episode.airdate,
          runtime: episode.runtime,
          image: episode.image && episode.image.original,
          overview: episode.summary && episode.summary,
        };
      });

      setEpisodes(newData);
      setEpisodeLoading(false);
    }
  };

  /**
   * Handles updating the season menu state
   */
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSeasonId(event.target.value as number);
  };

  /**
   * Handles rendering the season number
   */
  const renderSeasonTitle =
    episodes && episodes[0] ? (
      <Typography variant="h4">Season {episodes[0].season}</Typography>
    ) : (
      <Typography variant="h5" color="textSecondary">
        No information just yet
      </Typography>
    );

  /**
   * Handles rendering the episodes
   */
  const renderEpisodes = episodes.map((episode) => (
    <Episode key={episode.id} episode={episode} />
  ));

  /**
   * Handles updating the season menu state
   */
  useEffect(() => {
    if (tvShow.seasons && tvShow.seasons.length > 0) {
      setSeasonId(tvShow.seasons[0].id);
    }
  }, [tvShow.seasons]);

  /**
   * Handles fetching episodes only if the shows has seasons
   * and the seasonId exists
   */
  useEffect(() => {
    if (tvShow.seasons && seasonId) {
      setEpisodeLoading(true);
      getEpisodes(seasonId);
    }

    /**
     * Clean up after the component unmounts
     */
    return () => setEpisodes([]);
    // eslint-disable-next-line
  }, [seasonId]);

  return episodeLoading ? (
    <Spinner />
  ) : (
    <Fragment>
      <SeasonMenu
        show={tvShow}
        handleChange={handleChange}
        seasonId={seasonId}
      />

      <Paper elevation={10} className={classes.episodesContainer}>
        {renderSeasonTitle}
        <hr className={classes.divider} />
        {renderEpisodes}
      </Paper>
    </Fragment>
  );
};
