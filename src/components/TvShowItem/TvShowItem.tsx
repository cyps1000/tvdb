/**
 * External Imports
 */
import ReactHtmlParser from "react-html-parser";

/**
 * Imports Material UI components
 */
import { Paper, Grid, Typography, Box } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./TvShowItem.styles";

/**
 * Imports interfaces
 */
import { TvShow } from "../../hooks";

/**
 * Imports assets
 */
import noImage from "../../assets/noImgPortrait.png";

/**
 * Defines the props interface
 */
export interface TvShowItemProps {
  tvShow: TvShow;
}

/**
 * Displays the component
 */
export const TvShowItem: React.FC<TvShowItemProps> = (props) => {
  const { tvShow } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Paper elevation={10} className={classes.TvShowItem}>
        <Grid container spacing={1} direction="row">
          <Grid item md={3} lg={3} xl={3} className={classes.posterGrid}>
            <img
              className={classes.poster}
              alt={tvShow.show.name}
              src={tvShow.show.image ? tvShow.show.image.original : noImage}
            />
          </Grid>
          <Grid item md={9} lg={9} xl={9}>
            <Typography variant="h4" gutterBottom>
              {tvShow.show.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {ReactHtmlParser(
                tvShow.show.summary
                  ? tvShow.show.summary.substring(0, 120).concat("...")
                  : "No description provided"
              )}
            </Typography>
            <Box className={classes.networkDetails}>
              <Typography variant="h6" color="textSecondary">
                Network:{" "}
                <strong>
                  {tvShow.show.network
                    ? tvShow.show.network.name
                    : "On the net"}
                </strong>
              </Typography>
              <Typography variant="h6" color="textSecondary">
                First Aired:{" "}
                <strong>
                  {tvShow.show.premiered ? tvShow.show.premiered : "N/A"}
                </strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
