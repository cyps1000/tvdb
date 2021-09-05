import { useEffect, useState } from "react";

/**
 * Imports Material UI components
 */
import { Fab } from "@material-ui/core";

/**
 * Imports Material UI icons
 */
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

/**
 * Imports the component styles
 */
import { useStyles } from "./ScrollToTopButton.styles";

/**
 * Displays the component
 */
export const ScrollToTopButton: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Inits the button state
   */
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * Handles scrolling to the top
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    /**
     * Handles displaying the button after scrolling for 500px
     */
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    /**
     * Add events that 'listens' for the scroll
     */
    window.addEventListener("scroll", toggleVisibility);

    /**
     * Handles removing the event when the component is unmounted
     */
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return visible ? (
    <div className={classes.ScrollToTopButton}>
      <Fab className={classes.fab} onClick={scrollToTop}>
        <ExpandLessOutlinedIcon />
      </Fab>
    </div>
  ) : null;
};
