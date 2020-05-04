import {
  TOGGLE_DARK_MODE,
  SET_DARK_MODE,
  SET_LIGHT_MODE,
  SET_GREEN_MODE
} from './types';

export const toggleDarkMode = () => {
  return { type: TOGGLE_DARK_MODE };
};

// FUTURE MODES
export const setDarkMode = () => {
  return { type: SET_DARK_MODE };
};

export const setLightMode = () => {
  return { type: SET_LIGHT_MODE };
};

export const setGreenMode = () => {
  return { type: SET_GREEN_MODE };
};
