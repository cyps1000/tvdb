import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

/**
 * Imports Material UI components
 */
import { Grid, Button } from "@material-ui/core";

/**
 * Imports components
 */
import { TVShowHeader } from "../TVShowHeader";
import { TVShowDetails } from "../TVShowDetails";

/**
 * Imports hooks
 */
import { useTvShow } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./TVShow.styles";

/**
 * Imports interfaces
 */
import { ParamTypes, TVShowResponse } from "./TVShow.types";
import { TVShow as ITVShow } from "../../hooks";

/**
 * Displays the component
 */
export const TVShow: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the useParams hook
   */
  const { id } = useParams<ParamTypes>();

  /**
   * Inits the useHistory hook
   */
  const { goBack } = useHistory();

  /**
   * Inits the useTvShow hook
   */
  const { tvShow, updateTVShow, updateLoading } = useTvShow();

  /**
   * Handles converting the string into a number
   */
  const tvShowId = Number(id);

  /**
   * Handles fetching the tv show data
   */
  const getTvShow = async (id: number) => {
    const { data } = await axios.get<TVShowResponse>(
      `https://api.tvmaze.com/shows/${id}?embed=episodes`
    );

    if (data) {
      const tvShowResult: ITVShow = {
        id: data.id,
        name: data.name,
        poster: data.image && data.image.original,
        status: data.status && data.status,
        airsTime: data.schedule && data.schedule.time,
        airsDayOfWeek: data.schedule && data.schedule.days,
        genre: data.genres && data.genres,
        network: data.network ? data.network.name : null,
        webChannel: data.webChannel ? data.webChannel.name : null,
        siteRating: data.rating && data.rating.average,
        overview: data.summary && data.summary,
        seasons: [],
      };

      updateTVShow(tvShowResult);
      updateLoading(false);
    }
  };

  useEffect(() => {
    getTvShow(tvShowId);
    // eslint-disable-next-line
  }, [tvShowId]);

  return (
    <div className={classes.TVShow}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        xs={11}
        sm={10}
        md={9}
        lg={8}
        xl={7}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.backButton}
          onClick={goBack}
        >
          Go Back
        </Button>
        <TVShowHeader show={tvShow} />
        <TVShowDetails show={tvShow} />
      </Grid>
    </div>
  );
};
