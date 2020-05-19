import React from 'react';

import { H1, H2, P } from '../components/styles/text.style';
import * as PALETTE from '../components/styles/colors.style';
import * as SIZE from '../constants/buttonSizes';
import * as POSITION from '../constants/position';

export const gimmeText = (textSize: string, text: string): JSX.Element => {
  console.log('GIMME TEXT', text);
  if (textSize === SIZE.BIG)
    return <H1 style={{ padding: '0.4rem' }}>{text}</H1>;
  if (textSize === SIZE.MID)
    return <H2 style={{ padding: '0.3rem' }}>{text}</H2>;
  return <P style={{ padding: '0.2rem' }}>{text}</P>;
};

export const levelForData = (levelStr: string): string | null => {
  switch (levelStr) {
    case 'a':
      return 'level_A';
    case 'b':
      return 'level_B';
    case 'c':
      return 'level_C';
    default:
      return null;
  }
};
