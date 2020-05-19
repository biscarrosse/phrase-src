// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import {
  showAnswer,
  showQuestion,
  loadPhrases
} from '../../store/exercise/actions';
// Style:
import {
  Horizontal,
  Vertical,
  Margin,
  SpaceBetween
} from '../styles/common.style';
import { H1, H2, P } from '../styles/text.style';
// Components:
import Card from '../card/Card';
import Button from '../button/Button';
// Constants:
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';
import fakeData from '../../constants/dummy.json';
// Types:
import { BlockOf100 } from '../../store/exercise/types';
// Libraries:
import { random, isEmpty } from 'lodash';

const ExerciseQuestion = () => {
  const dispatch = useDispatch();
  const EMPTY_STR = '';
  const [cardState, setCardState] = useState({
    block: 0,
    phrase: EMPTY_STR,
    idx: 0
  });

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

  // TODO: those any
  const fakeApiCall = (miliseconds: number, fakeData: any): any => {
    return new Promise((resolve, reject): any => {
      setTimeout(() => {
        if (true) resolve(fakeData);
        reject({ reason: 'just rejected' });
      }, miliseconds);
    });
  };

  useEffect(() => {
    console.log(
      'exercise question DID MNT',
      originLanguage,
      targetLanguage,
      selectedLevel
    );

    const asyncCall = async () => {
      const miliseconds = random(500, 2000);
      console.log('miliseconds', miliseconds);
      try {
        const data: BlockOf100 = await fakeApiCall(miliseconds, fakeData);
        console.log('data from API', data);
        dispatch(loadPhrases(data));
        return data;
      } catch (err) {
        throw new Error(err);
      }
    };

    originLanguage && targetLanguage && selectedLevel && asyncCall();
  }, []);

  const gimmePhraseData = (data: BlockOf100) => {
    if (isEmpty(phrases_data)) return;
    //console.log('gimmePhraseData---', data.data_of_100.block_0);
    console.log('gimmePhraseData---', data.data_of_100.block_0);
    return true;
  };

  useEffect(() => {
    console.log(
      'UPDT phrases_data - empty',
      phrases_data,
      isEmpty(phrases_data)
    );
    if (isEmpty(phrases_data)) return;

    if (cardState.phrase === EMPTY_STR && phrases_data) {
      gimmePhraseData(phrases_data);
      return;
    }
  }, [phrases_data]);

  const handleAnswer = () => {
    dispatch(showAnswer());
    console.log('handleAnswer');
  };

  return (
    <Vertical className="exercise" style={{ width: '100%' }}>
      {phrases_data ? <p>data are here</p> : <p>wait for data</p>}
      <Margin marginValue="1rem 0">
        <Card color={COLOR.WHITE} text={cardState.phrase} textSize={SIZE.MID} />
      </Margin>
      <Button
        size={SIZE.SMALL}
        color={COLOR.BLUE}
        textColor={COLOR.WHITE}
        text={TEXT.SHOW_ANSWER}
        textSize={SIZE.MID}
        action={handleAnswer}
        fullWidth
      />
    </Vertical>
  );
};

export default ExerciseQuestion;
