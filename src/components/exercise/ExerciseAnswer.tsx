// React:
import React from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { showAnswer, showQuestion } from '../../store/exercise/actions';
// Style:
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
// Constants:
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';

const ExerciseAnswer = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    // dispatch(showAnswer());
    console.log('handleNext');
  };

  const handleRepeat = () => {
    // dispatch(showAnswer());
    console.log('handleRepeat');
  };

  return (
    <Vertical className="exercise" style={{ width: '100%' }}>
      <Margin marginValue="1rem 0">
        <Card
          color={COLOR.WHITE}
          text="Test string for Answer."
          textSize={SIZE.MID}
        />
      </Margin>
      <Horizontal>
        <SpaceBetween width={100}>
          <Button
            size={SIZE.SMALL}
            color={COLOR.YELLOW}
            textColor={COLOR.WHITE}
            text={TEXT.REPEAT}
            textSize={SIZE.MID}
            action={handleRepeat}
            fullWidth
            left
          />
          <Button
            size={SIZE.SMALL}
            color={COLOR.GREEN_LIME}
            textColor={COLOR.WHITE}
            text={TEXT.GOT_IT_NEXT}
            textSize={SIZE.MID}
            action={handleNext}
            fullWidth
            right
          />
        </SpaceBetween>
      </Horizontal>
    </Vertical>
  );
};

export default ExerciseAnswer;
