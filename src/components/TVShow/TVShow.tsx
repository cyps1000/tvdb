import { useEffect, Fragment } from "react";

/**
 * External imports
 */
import axios from "axios";

/**
 * Imports Material UI components
 */
import { Grid, Button } from "@material-ui/core";

/**
 * Imports components
 */
import { Title } from "../Title";
import { TVShowHeader } from "../TVShowHeader";
import { TVShowDetails } from "../TVShowDetails";
import { Season } from "../Season";
import { Spinner } from "../Spinner";

/**
 * Imports hooks
 */
import { useParams, useHistory } from "react-router-dom";
import { useTvShow, tvShowDefaultValues } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./TVShow.styles";

/**
 * Imports interfaces
 */
import { ParamTypes, TVShowResponse } from "./TVShow.types";
import { TVShow as ITVShow, Season as ISeason } from "../../hooks";

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
  const { tvShow, loading, updateTVShow, updateLoading } = useTvShow();

  /**
   * Handles converting the string into a number
   */
  const tvShowId = Number(id);

  /**
   * Handles fetching the tv show data
   */
  const getTvShow = async (id: number) => {
    const { data } = await axios.get<TVShowResponse>(
      `https://api.tvmaze.com/shows/${id}?embed=seasons`
    );

    if (data) {
      const seasons: ISeason[] = data._embedded.seasons.map((season) => {
        return {
          id: season.id,
          number: season.number && season.number,
        };
      });

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
        seasonsCount: seasons && seasons.length,
        seasons,
      };

      updateTVShow(tvShowResult);
      updateLoading(false);
    }
  };

  useEffect(() => {
    getTvShow(tvShowId);

    return () => {
      updateTVShow(tvShowDefaultValues.tvShow);
      updateLoading(true);
    };
    // eslint-disable-next-line
  }, [tvShowId]);

  return (
    <div className={classes.TVShow}>
      <Grid
        container
        item
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
        <Title showDescription={false} />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.backButton}
          onClick={goBack}
        >
          Go Back
        </Button>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <TVShowHeader show={tvShow} />
            <TVShowDetails show={tvShow} />
            <Season />
          </Fragment>
        )}
      </Grid>
    </div>
  );
};
