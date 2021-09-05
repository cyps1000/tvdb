import { forwardRef } from "react";

/**
 * External imports
 */
import ReactHtmlParser from "react-html-parser";

/**
 * Imports Material UI components
 */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  Box,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";

/**
 * Imports Material UI icons
 */
import CloseIcon from "@material-ui/icons/Close";

/**
 * Imports hooks
 */
import { useModal } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Modal.styles";

/**
 * Handles the modal's transition
 */
const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * Displays the component
 */
export const Modal: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the modal hook
   */
  const { content, toggleModal, open } = useModal();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleModal}
      aria-labelledby="episode-information-dialog-slide-title"
      aria-describedby="episode-information-dialog-slide-description"
      className={classes.Modal}
    >
      <DialogTitle id="episode-information-dialog-slide-title">
        <Box className={classes.container}>
          <Typography variant="h6" color="textSecondary">
            <strong>{content.title}</strong>
          </Typography>
          <Box className={classes.iconContainer} title="Close">
            <CloseIcon className={classes.icon} onClick={toggleModal} />
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <img
          alt={content.title}
          src={content.image}
          className={classes.banner}
        />
        <Box className={classes.modalContent}>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom
            className={classes.text}
          >
            <strong>Description:</strong>
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {ReactHtmlParser(content.overview)}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <strong>Average runtime: </strong>
            {content.runtime}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
