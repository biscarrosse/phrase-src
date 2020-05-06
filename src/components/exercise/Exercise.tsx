import React from 'react';
import { Horizontal, Vertical, Flex } from '../styles/common.style';
// import { Btn } from '../styles/button.style';
// import { H1, H2, P } from '../styles/text.style';
// import * as PALETTE from '../styles/colors.style';
import Button from '../button/Button';
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';

const About = () => {
  const one = () => console.log('one');
  const two = () => console.log('two');
  // show card --> slide to see answer via react-spring
  // listen btn
  // repeat btn
  // got it btn
  return (
    <>
      <Vertical style={{ width: '100%' }}>
        <p>Card</p>
        <Horizontal>
          <Flex grow={6}>
            <Button
              size={SIZE.SMALL}
              color={COLOR.YELLOW}
              textColor={COLOR.WHITE}
              text={TEXT.REPEAT}
              textSize={SIZE.MID}
              action={one}
            />
          </Flex>
          <Flex grow={6}>
            <Button
              size={SIZE.SMALL}
              color={COLOR.GREEN_LIME}
              textColor={COLOR.WHITE}
              text={TEXT.GOT_IT_NEXT}
              textSize={SIZE.MID}
              action={two}
            />
          </Flex>
        </Horizontal>
      </Vertical>
    </>
  );
};

export default About;
