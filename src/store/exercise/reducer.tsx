import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  ExerciseAction
} from './types';

const initState = {
  isQuestion: true,
  isAnswer: false,
  question: null,
  answer: null,
  phrases_data: {}
};

const exerciseReducer = (state = initState, action: ExerciseAction) => {
  switch (action.type) {
    case SHOW_ANSWER:
      return { ...state, isQuestion: false, isAnswer: true };
    case SHOW_QUESTION:
      return { ...state, isQuestion: true, isAnswer: false };
    case LOAD_PHRASES:
      return { ...state, phrases_data: { ...action.payload } }; // ...interface BlockOf100
    default:
      return state;
  }
};

export default exerciseReducer;
