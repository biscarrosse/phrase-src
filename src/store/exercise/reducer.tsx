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
    // case SHOW_ANSWER:
    //   return { ...state, from: action.payload };
    // case SHOW_QUESTION:
    //   return { ...state, to: action.payload };
    default:
      return state;
  }
};

export default exerciseReducer;
