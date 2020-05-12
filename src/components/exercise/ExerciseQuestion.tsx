// React:
import React, { useEffect } from 'react';
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
import { random } from 'lodash';

const ExerciseQuestion = () => {
  const dispatch = useDispatch();

  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

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

  const handleAnswer = () => {
    dispatch(showAnswer());
    console.log('handleAnswer');
  };

  return (
    <Vertical className="exercise" style={{ width: '100%' }}>
      <Margin marginValue="1rem 0">
        <Card
          color={COLOR.WHITE}
          text="Test string for Question."
          textSize={SIZE.MID}
        />
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
