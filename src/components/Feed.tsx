import React from 'react';
import Button from './button/Button';
import { H1, P } from './styles/text.style';
import { Center, Horizontal, Vertical, FullWidth } from './styles/common.style';
import * as TEXT from '../constants/commonText';
import * as SIZE from '../constants/buttonSizes';
import * as COLOR from '../constants/buttonColors';

const Feed = () => {
  return (
    <FullWidth>
      <Vertical>
        <Center>
          <H1>{TEXT.SITE_MOTTO}</H1>
        </Center>
        <Center>
          <Horizontal>
            <P>ENG</P>
            <P>--></P>
            <P>SPA</P>
          </Horizontal>
        </Center>
        <Center>
          <Button
            size={SIZE.BIG}
            color={COLOR.GREEN}
            text={TEXT.MAIN_CALL_TO_ACTION}
          />
        </Center>
      </Vertical>
    </FullWidth>
  );
};

export default Feed;
