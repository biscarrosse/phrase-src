import { SHOW_ANSWER, SHOW_QUESTION } from './types';

export const showAnswer = () => {
  return { type: SHOW_ANSWER };
};

export const showQuestion = () => {
  return { type: SHOW_QUESTION };
};
