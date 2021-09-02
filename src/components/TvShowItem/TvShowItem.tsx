import { Link } from "react-router-dom";

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
 * Imports assets
 */
import noImage from "../../assets/noImgPortrait.png";

/**
 * Imports interfaces
 */
import { TvShowItemProps } from "./TvShowItem.types";

/**
 * Displays the component
 */
export const TvShowItem: React.FC<TvShowItemProps> = (props) => {
  const { result } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.root}>
      <Link to={`/shows/${result.id}`}>
        <Paper elevation={10} className={classes.TvShowItem}>
          <Grid container spacing={2} direction="row">
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className={classes.posterGrid}
            >
              <img
                className={classes.poster}
                alt={result.name}
                src={result.poster ? result.poster : noImage}
              />
            </Grid>
            <Grid
              item
              sm={9}
              md={9}
              lg={9}
              xl={9}
              className={classes.contentGrid}
            >
              <Typography variant="h4" gutterBottom>
                {result.name}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {ReactHtmlParser(
                  result.overview
                    ? result.overview.substring(0, 120).concat("...")
                    : "No description provided"
                )}
              </Typography>
              <Box className={classes.networkDetails}>
                <Typography variant="h6" color="textSecondary">
                  Network:{" "}
                  <strong>{result.network ? result.network : "N/A"}</strong>
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  First Aired:{" "}
                  <strong>
                    {result.firstAired ? result.firstAired : "N/A"}
                  </strong>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};
