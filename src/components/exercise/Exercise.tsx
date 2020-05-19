// React:
import React, { useEffect } from 'react';
// Redux:
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';

import ExerciseAnswer from './ExerciseAnswer';
import ExerciseQuestion from './ExerciseQuestion';

const Exercise = () => {
  const { isQuestion } = useSelector((state: AppState) => state.exercise);

  useEffect(() => {
    console.log('isQuestion toggle', isQuestion);
  }, [isQuestion]);

  // show card --> slide to see answer via react-spring

  const result = isQuestion ? <ExerciseQuestion /> : <ExerciseAnswer />;

  return <>{result}</>;
};

export default Exercise;
