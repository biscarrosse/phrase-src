import { ModalPayload, OPEN_MODAL, CLOSE_MODAL } from './types';

export const openModal = (message: ModalPayload) => {
  return {
    type: OPEN_MODAL,
    payload: message
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
