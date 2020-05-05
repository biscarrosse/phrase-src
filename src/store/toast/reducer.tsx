import {
  OPEN_TOAST,
  CLOSE_TOAST,
  ToastOpenAction,
  ToastCloseAction,
  ToastPayload
} from './types';

const initState = {
  toastVisible: false,
  color: null,
  emoticon: null,
  text: null
};

const toastReducer = (
  state = initState,
  action: ToastOpenAction | ToastCloseAction
) => {
  switch (action.type) {
    case OPEN_TOAST:
      return {
        ...state,
        toastVisible: action.payload.toastVisible,
        color: action.payload.color,
        emoticon: action.payload.emoticon,
        text: action.payload.text
      };
    case CLOSE_TOAST:
      return { ...initState };
    default:
      return state;
  }
};

export default toastReducer;
