/**
 * Imports components
 */
import { SearchProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return <SearchProvider>{children}</SearchProvider>;
};
