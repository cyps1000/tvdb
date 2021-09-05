import { forwardRef } from "react";

/**
 * Imports Material UI components
 */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  useMediaQuery,
  Zoom,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { useTheme } from "@material-ui/core/styles";

/**
 * Imports Material UI icons
 */
import CloseIcon from "@material-ui/icons/Close";

/**
 * Imports the component styles
 */
import { useStyles } from "./ImageModal.styles";

/**
 * Imports interfaces
 */
import { ImageModalProps } from "./ImageModal.types";

/**
 * Defines the zoom transition
 */
const ZoomTransition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Zoom in={true} ref={ref} {...props} />;
});

/**
 * Displays the component
 */
export const ImageModal: React.FC<ImageModalProps> = (props) => {
  const { toggleImageModal, open, image } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the theme hook
   */
  const theme = useTheme();

  /**
   * Handles mobile view
   */
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={open}
      keepMounted
      fullScreen={fullScreen}
      onClose={toggleImageModal}
      TransitionComponent={ZoomTransition}
      aria-labelledby="image-dialog-slide-title"
      aria-describedby="image-dialog-slide-description"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <DialogTitle
        id="image-dialog-slide-title"
        className={classes.dialogTitle}
      >
        <Box className={classes.container}>
          <Box className={classes.iconContainer} title="Close">
            <CloseIcon className={classes.icon} onClick={toggleImageModal} />
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent className={classes.ImageModal}>
        <img alt="show-poster" src={image} className={classes.banner} />
      </DialogContent>
    </Dialog>
  );
};
