/**
 * Imports components
 */
import { SearchProvider, TVShowProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return (
    <SearchProvider>
      <TVShowProvider>{children}</TVShowProvider>
    </SearchProvider>
  );
};
