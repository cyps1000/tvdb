/**
 * Imports Material UI components
 */
import { Grid, Paper, Typography, Box } from "@material-ui/core";

/**
 * Imports the component styles
 */
import { useStyles } from "./TVShowDetails.styles";

/**
 * Imports interfaces
 */
import { TVShowDetailsProps } from "./TVShowDetails.types";

/**
 * Displays the component
 */
export const TVShowDetails: React.FC<TVShowDetailsProps> = (props) => {
  const { show } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles storing the values in a string
   */
  const airsDayOfWeek =
    show.airsDayOfWeek && show.airsDayOfWeek.length > 1
      ? "Weekdays"
      : show.airsDayOfWeek![0];

  return (
    <Paper elevation={10} className={classes.TVShowDetails}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={7}
        className={classes.container}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={classes.detailsGrid}
        >
          <Box>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Airs:{" "}
              <strong>
                {airsDayOfWeek ? "Every " + airsDayOfWeek : "N/A"}
              </strong>
              <strong>{show.airsTime ? " at " + show.airsTime : ""}</strong>
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Network:{" "}
              <strong>
                {show.network
                  ? show.network
                  : show.webChannel && show.webChannel}
              </strong>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={classes.boxContainer}
        >
          <Box>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Status: <strong>{show.status ? show.status : "N/A"}</strong>
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Seasons: <strong>To do</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
