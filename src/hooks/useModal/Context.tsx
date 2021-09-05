import { createContext } from "react";

/**
 * Imports interfaces
 */
import { ModalData } from "./useModal.types";

/**
 * Defines the default values interface
 */
export interface ProviderValues {
  content: ModalData;
  open: boolean;
  toggleModal: () => void;
  updateModalContent: (content: ModalData) => void;
}

/**
 * Init the default values
 */
export const defaultValues: ProviderValues = {
  content: {
    title: "",
    image: "",
    overview: "",
    runtime: "",
  },
  open: false,
  toggleModal: () => {},
  updateModalContent: (content: ModalData) => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
