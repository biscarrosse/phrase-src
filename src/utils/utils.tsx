import React from 'react';

import { H1, H2, P } from '../components/styles/text.style';
import * as PALETTE from '../components/styles/colors.style';
import * as SIZE from '../constants/buttonSizes';
import * as POSITION from '../constants/position';

export const gimmeText = (textSize: string, text: string): JSX.Element => {
  if (textSize === SIZE.BIG)
    return <H1 style={{ padding: '0.4rem' }}>{text}</H1>;
  if (textSize === SIZE.MID)
    return <H2 style={{ padding: '0.3rem' }}>{text}</H2>;
  return <P style={{ padding: '0.2rem' }}>{text}</P>;
};
