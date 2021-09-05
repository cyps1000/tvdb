import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseLine from "@material-ui/core/CssBaseline";

/**
 * Component Imports
 */
import { Providers } from "./components/Providers";
import { Routes } from "./components/Routes";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseLine />
      <Providers>
        <Routes />
        <ScrollToTopButton />
      </Providers>
    </Fragment>
  );
};
