import { SHOW_ANSWER, SHOW_QUESTION, LOAD_PHRASES, BlockOf100 } from './types';

export const showAnswer = () => {
  return { type: SHOW_ANSWER };
};

export const showQuestion = () => {
  return { type: SHOW_QUESTION };
};

export const loadPhrases = (phrases: BlockOf100) => {
  return { type: LOAD_PHRASES, payload: phrases };
};
