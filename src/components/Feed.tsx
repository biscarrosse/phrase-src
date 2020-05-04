import React from 'react';
import Button from './button/Button';
import { H1, P } from './styles/text.style';
import {
  Center,
  Horizontal,
  Vertical,
  FullWidth,
  Margin
} from './styles/common.style';

const Feed = () => {
  return (
    <FullWidth>
      <Vertical>
        <Center>
          <H1>Learn common daily phrases fast</H1>
        </Center>
        <Center>
          <Horizontal>
            <P>ENG</P>
            <P>--></P>
            <P>SPA</P>
          </Horizontal>
        </Center>
        <Center>
          <Button size="big" color="green" text="Gimme 10 sentences now!" />
        </Center>
      </Vertical>
    </FullWidth>
  );
};

export default Feed;
