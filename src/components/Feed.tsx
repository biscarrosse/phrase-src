import React from 'react';
import Button from './button/Button';
import { LightH1, P } from './styles/text.style';
import {
  Center,
  Horizontal,
  Vertical,
  FullWidth,
  Margin
} from './styles/common.style';
import * as TEXT from '../constants/commonText';
import * as SIZE from '../constants/buttonSizes';
import * as COLOR from '../constants/buttonColors';

const Feed = () => {
  return (
    <FullWidth>
      <Vertical>
        <Margin marginValue="1rem">
          <Center>
            <LightH1 style={{ textAlign: 'center' }}>{TEXT.SITE_MOTTO}</LightH1>
          </Center>
        </Margin>
        <Center>
          <Horizontal>
            <P>ENG</P>
            <P>--></P>
            <P>SPA</P>
          </Horizontal>
        </Center>
        <Margin marginValue="1rem">
          <Center>
            <Button
              size={SIZE.BIG}
              color={COLOR.GREEN_LIME}
              textColor={COLOR.WHITE}
              text={TEXT.MAIN_CALL_TO_ACTION}
            />
          </Center>
        </Margin>
        <Center>
          <Button
            size={SIZE.MID}
            color={COLOR.BLUE}
            textColor={COLOR.WHITE}
            text={TEXT.SIGNUP_CALL_TO_ACTION}
          />
        </Center>
      </Vertical>
    </FullWidth>
  );
};

export default Feed;
