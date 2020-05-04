import * as palette from './colors.style';
import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  body: palette.WHITE,
  white_always: palette.WHITE,
  text: palette.BLACK,
  purple_always: palette.PURPLE,
  purpleThemed: palette.PURPLE_LIGHT
};

export const dark: DefaultTheme = {
  body: palette.BLACK,
  white_always: palette.WHITE,
  text: palette.WHITE,
  purple_always: palette.PURPLE,
  purpleThemed: palette.PURPLE_DARK
};
