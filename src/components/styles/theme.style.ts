import * as palette from './colors.style';
import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  body: palette.white,
  white_always: palette.white,
  text: palette.black,
  purple_always: palette.purple,
  purpleThemed: palette.purpleLight
};

export const dark: DefaultTheme = {
  body: palette.black,
  white_always: palette.white,
  text: palette.white,
  purple_always: palette.purple,
  purpleThemed: palette.purpleDark
};
