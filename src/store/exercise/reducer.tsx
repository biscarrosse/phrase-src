import { SHOW_ANSWER, SHOW_QUESTION, ExerciseAction } from './types';

const initState = {
  isQuestion: true,
  isAnswer: false,
  question: null,
  answer: null,
  phrases: []
};

const exerciseReducer = (state = initState, action: ExerciseAction) => {
  switch (action.type) {
    case SHOW_ANSWER:
      return { ...state, isQuestion: false, isAnswer: true };
    case SHOW_QUESTION:
      return { ...state, isQuestion: true, isAnswer: false };
    default:
      return state;
  }
};

export default exerciseReducer;
