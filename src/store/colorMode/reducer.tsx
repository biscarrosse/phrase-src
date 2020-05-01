import { TOGGLE_DARK_MODE, DarkModeAction } from './types';

const initState = {
  isDarkMode: false
};

const colorModeReducer = (state = initState, action: DarkModeAction) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default colorModeReducer;
