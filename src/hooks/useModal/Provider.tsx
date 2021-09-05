import React, { useState } from "react";

/**
 * Imports the context
 */
import { context, defaultValues, ProviderValues } from "./Context";

/**
 * Imports interfaces
 */
import { ModalData } from "./useModal.types";

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const ModalProvider: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Handles the modal data state
   */
  const [content, setContent] = useState<ModalData>(defaultValues.content);

  /**
   * Handles the modal state
   * open / close
   */
  const [open, setOpen] = useState<boolean>(defaultValues.open);

  /**
   * Handles updating the modal data
   */
  const updateModalContent = (content: ModalData) => {
    setContent(content);
  };

  /**
   * Handles toggling the modal
   */
  const toggleModal = () => setOpen(!open);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    content,
    open,
    toggleModal,
    updateModalContent,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
