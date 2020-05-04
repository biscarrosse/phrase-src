import React from 'react';
import { LightH1 } from '../styles/text.style';
import { Center, Margin } from '../styles/common.style';
import * as TEXT from '../../constants/commonText';

export const HomeSiteMotto = () => {
  return (
    <Margin className="motto" marginValue="1rem">
      <Center>
        <LightH1 style={{ textAlign: 'center' }}>{TEXT.SITE_MOTTO}</LightH1>
      </Center>
    </Margin>
  );
};
