import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  ExerciseAction,
  PhrasesPayload
} from './types';

const initState = {
  isQuestion: true,
  isAnswer: false,
  question: null,
  answer: null,
  phrases: {}
};

const exerciseReducer = (
  state = initState,
  action: ExerciseAction | PhrasesPayload
) => {
  switch (action.type) {
    case SHOW_ANSWER:
      return { ...state, isQuestion: false, isAnswer: true };
    case SHOW_QUESTION:
      return { ...state, isQuestion: true, isAnswer: false };
    case LOAD_PHRASES:
      return { ...state }; // , phrases: ...action.payload
    default:
      return state;
  }
};

export default exerciseReducer;
