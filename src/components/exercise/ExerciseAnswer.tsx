// React:
import React, { useEffect } from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import {
  increasePhraseIdx,
  resetCurrentPhraseIdx,
  setBlock,
  setCurrentBlockName,
  showQuestion
} from '../../store/exercise/actions';
import { BlockOf100, Phrase } from '../../store/exercise/types';
// Style:
import {
  Horizontal,
  Vertical,
  Margin,
  SpaceBetween
} from '../styles/common.style';
// Components:
import Card from '../card/Card';
import Button from '../button/Button';
// Constants:
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';
// Utils:
import { levelForData } from '../../utils/utils';

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
    currentBlockName,
    currentPhraseIdx
  } = useSelector((state: AppState) => state.exercise);

  const handleRepeat = () => console.log('handleRepeat');

  const handleNext = () => {
    const LAST_IDX = 2; // TODO: 10
    if (currentPhraseIdx === LAST_IDX) {
      console.warn(`I'm on the last idx of block, load a next block`);
      const oldBlockName: string = currentBlockName;
      const block = oldBlockName.slice().split('_');
      const nextBlockName = `${block[0]}_${parseInt(block[1]) + 1}`;
      dispatch(setCurrentBlockName(nextBlockName));
      dispatch(resetCurrentPhraseIdx());

      const data: BlockOf100 = phrases_data;
      try {
        const level = levelForData(selectedLevel);
        const newBlock: Phrase[] =
          data.data_of_100[`${level}`][`${nextBlockName}`].phrases;
        dispatch(setBlock(newBlock));
        dispatch(showQuestion());
      } catch (err) {
        throw new Error('I do not have more blocks ready yet - TODO: make API');
        // TODO: loop back to the beginning
      }
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
