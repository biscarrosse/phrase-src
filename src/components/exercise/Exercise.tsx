// React:
import React, { useEffect, useState } from 'react';
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
import ExerciseAnswer from './ExerciseAnswer';
import ExerciseQuestion from './ExerciseQuestion';
// Constants:
import * as SIZE from '../../constants/buttonSizes';
import * as TEXT from '../../constants/commonText';
import * as COLOR from '../../constants/buttonColors';

const Exercise = () => {
  const [question, setQuestion] = useState(false);

  const { isQuestion } = useSelector((state: AppState) => state.exercise);

  useEffect(() => {
    console.log('isQuestion toggle', isQuestion);
  }, [isQuestion]);

  const one = () => console.log('one');
  const two = () => console.log('two');
  const three = () => console.log('three');
  // show card --> slide to see answer via react-spring

  const result = isQuestion ? <ExerciseQuestion /> : <ExerciseAnswer />;

  return <>{result}</>;
};

export default Exercise;
