import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  PhrasesPayload
} from './types';

export const showAnswer = () => {
  return { type: SHOW_ANSWER };
};

export const showQuestion = () => {
  return { type: SHOW_QUESTION };
};

export const loadPhrases = (phrases: PhrasesPayload) => {
  return { type: LOAD_PHRASES, payload: phrases };
};
