import { useContext } from "react";

/**
 * Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { SearchProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the context / object
 * - To be used inside components
 */
const useSearch = () => useContext(context);

export { useSearch, SearchProvider };
