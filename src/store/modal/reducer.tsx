import { OPEN_MODAL, CLOSE_MODAL, ModalAction } from './types';

const initState = {
  message: null
};

const modalReducer = (state = initState, action: ModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, message: state.message };
    case CLOSE_MODAL:
      return { ...initState };
    default:
      return state;
  }
};

export default modalReducer;
