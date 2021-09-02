import { useContext } from "react";

/**
 * Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { TVShowProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the context / object
 * - To be used inside components
 */
const useTvShow = () => useContext(context);

export { useTvShow, TVShowProvider };
