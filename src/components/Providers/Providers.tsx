/**
 * Imports components
 */
import { TvShowProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return <TvShowProvider>{children}</TvShowProvider>;
};
