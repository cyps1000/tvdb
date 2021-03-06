import { useState } from "react";

/**
 * External imports
 */
import { v4 } from "uuid";
import ReactHtmlParser from "react-html-parser";

/**
 * Imports components
 */
import { ImageModal } from "../ImageModal";

/**
 * Imports Material UI components
 */
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Grid, Paper, Typography, Box, Chip } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

/**
 * Imports Material UI icons
 */
import ZoomInOutlinedIcon from "@material-ui/icons/ZoomInOutlined";

/**
 * Imports the component styles
 */
import { useStyles } from "./TVShowHeader.styles";

/**
 * Imports assets
 */
import noImage from "../../assets/noImgPortrait.png";

/**
 * Imports interfaces
 */
import { TVShowHeaderProps } from "./TVShowHeader.types";

/**
 * Displays the component
 */
export const TVShowHeader: React.FC<TVShowHeaderProps> = (props) => {
  const { show } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the useTheme hook
   */
  const theme = useTheme();

  /**
   * Handles the mobile view
   */
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  /**
   * Inits the modal state
   */
  const [open, setOpen] = useState<boolean>(false);

  /**
   * Inits the icons visibility state
   */
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * Handles opening / closing the image modal
   */
  const toggleImageModal = () => setOpen(!open);

  /**
   * Handles displaying tv show genres
   */
  const showGenres =
    show.genre && show.genre.length > 0
      ? show.genre.map((genre) => (
          <Chip key={v4()} label={genre} variant="outlined" />
        ))
      : "";

  return (
    <Paper elevation={10} className={classes.TVShowHeader}>
      <Grid container item spacing={3} direction="row">
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className={classes.posterGrid}
        >
          <Box
            className={classes.posterContainer}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={toggleImageModal}
          >
            {visible && (
              <ZoomInOutlinedIcon
                fontSize="large"
                className={classes.zoomIcon}
              />
            )}
            <img
              className={classes.poster}
              alt={show.name}
              src={show.poster ? show.poster : noImage}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.contentGrid}
        >
          <Typography variant="h4" gutterBottom>
            {show.name}
          </Typography>
          <Box className={classes.genres}>{showGenres}</Box>
          <Box className={classes.showRating}>
            <Rating
              size="large"
              value={show.siteRating}
              precision={0.1}
              max={isMobile ? 1 : 10}
              readOnly
            />
            <Typography variant="h6">
              {show.siteRating && show.siteRating + " / 10"}
            </Typography>
          </Box>
          <Typography variant="h5" color="textSecondary">
            {ReactHtmlParser(
              show.overview ? show.overview : "No description provided"
            )}
          </Typography>
        </Grid>
      </Grid>
      <ImageModal
        open={open}
        toggleImageModal={toggleImageModal}
        image={show.poster ? show.poster : noImage}
      />
    </Paper>
  );
};
