/**
 * External imports
 */
import ReactHtmlParser from "react-html-parser";
import { format, parseISO } from "date-fns";

/**
 * Imports Material UI components
 */
import { Paper, Typography, Grid } from "@material-ui/core";

/**
 * Imports hooks
 */
import { useModal } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Episode.styles";

/**
 * Imports assets
 */
import noImgBanner from "../../assets/noImgBanner.png";

/**
 * Imports interfaces
 */
import { Episode as IEpisode } from "../Season/Season.types";

/**
 * Defines the props interface
 */
export interface EpisodeProps {
  episode: IEpisode;
}

/**
 * Displays the component
 */
export const Episode: React.FC<EpisodeProps> = (props) => {
  const { episode } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { updateModalContent, toggleModal } = useModal();

  const handleClick = () => {
    const content = {
      title: `Episode ${episode.number}: ${episode.name} - Season ${episode.season}`,
      image: episode.image ? episode.image : noImgBanner,
      overview: episode.overview ? episode.overview : "No description provided",
      runtime: episode.runtime ? episode.runtime + " minutes" : "N/A",
    };

    updateModalContent(content);
    toggleModal();
  };

  return (
    <Paper
      elevation={3}
      className={classes.Episode}
      onClick={(e) => handleClick()}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className={classes.posterGrid}
        >
          <img
            alt={episode.name}
            src={episode.image ? episode.image : noImgBanner}
            className={classes.banner}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Episode {episode.number ? episode.number : "Special"}:{" "}
            <strong>{episode.name}</strong>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            <strong>
              {episode.firstAired
                ? `${
                    episode.firstAired < format(new Date(), "yyyy-MM-dd")
                      ? "Aired"
                      : "Airs"
                  } on ${format(parseISO(episode.firstAired), "PPPP")}`
                : null}
            </strong>
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {ReactHtmlParser(
              episode.overview ? episode.overview : "No description provided"
            )}
          </Typography>
          {/* <Typography variant="h6" color="textSecondary" gutterBottom>
            Average runtime:{" "}
            <strong>
              {episode.runtime ? episode.runtime + " minutes" : "N/A"}
            </strong>
          </Typography> */}
        </Grid>
      </Grid>
    </Paper>
  );
};
