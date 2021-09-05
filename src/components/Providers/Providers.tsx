/**
 * Imports components
 */
import { SearchProvider, TVShowProvider, ModalProvider } from "../../hooks";

/**
 * Displays the component
 */
export const Providers: React.FC = (props) => {
  const { children } = props;

  return (
    <SearchProvider>
      <TVShowProvider>
        <ModalProvider>{children}</ModalProvider>
      </TVShowProvider>
    </SearchProvider>
  );
};
