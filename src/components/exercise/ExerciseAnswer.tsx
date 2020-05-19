// React:
import React, { useEffect } from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { increasePhraseIdx, showQuestion } from '../../store/exercise/actions';
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

  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

  const {
    phrases_data,
    completedBlocks,
    currentBlock,
    currentPhraseIdx
  } = useSelector((state: AppState) => state.exercise);

  useEffect(() => {
    console.log('ANSWER UPDT', currentBlock, currentPhraseIdx);
  }, [currentBlock, currentPhraseIdx]);

  const handleRepeat = () => {
    console.log('handleRepeat');
  };

  const handleNext = () => {
    // +1 to currentPhraseIdx if is not last
    if (currentPhraseIdx === 9) {
      console.error('NEED CALL NEW BLOCK');
      return;
    }
    dispatch(increasePhraseIdx());
    dispatch(showQuestion());
    console.log('handleNext');
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
