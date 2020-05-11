import React from 'react';
import {
  Horizontal,
  Vertical,
  Margin,
  SpaceBetween
} from '../styles/common.style';
// import { Btn } from '../styles/button.style';
import { H1, H2, P } from '../styles/text.style';
// import * as PALETTE from '../styles/colors.style';
// Components:
import Card from '../card/Card';
import Button from '../button/Button';
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';

const About = () => {
  const one = () => console.log('one');
  const two = () => console.log('two');
  const three = () => console.log('three');
  // show card --> slide to see answer via react-spring
  // listen btn
  // repeat btn
  // got it btn
  return (
    <Vertical className="exercise" style={{ width: '100%' }}>
      <Margin marginValue="1rem 0">
        <Card
          color={COLOR.WHITE}
          text="Test string for card component - this should be translated by user."
          textSize={SIZE.MID}
        />
      </Margin>
      <Button
        size={SIZE.SMALL}
        color={COLOR.BLUE}
        textColor={COLOR.WHITE}
        text={TEXT.SHOW_ANSWER}
        textSize={SIZE.MID}
        action={three}
        fullWidth
      />
      <Horizontal>
        <SpaceBetween width={100}>
          <Button
            size={SIZE.SMALL}
            color={COLOR.YELLOW}
            textColor={COLOR.WHITE}
            text={TEXT.REPEAT}
            textSize={SIZE.MID}
            action={one}
            fullWidth
            left
          />
          <Button
            size={SIZE.SMALL}
            color={COLOR.GREEN_LIME}
            textColor={COLOR.WHITE}
            text={TEXT.GOT_IT_NEXT}
            textSize={SIZE.MID}
            action={two}
            fullWidth
            right
          />
        </SpaceBetween>
      </Horizontal>
    </Vertical>
  );
};

export default About;
