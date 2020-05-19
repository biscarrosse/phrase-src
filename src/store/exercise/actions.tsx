import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  SET_BLOCK,
  INCREASE_IDX,
  BlockOf100,
  Phrases,
  Phrase
} from './types';

export const showAnswer = () => {
  return { type: SHOW_ANSWER };
};

export const showQuestion = () => {
  return { type: SHOW_QUESTION };
};

export const increasePhraseIdx = () => {
  return { type: INCREASE_IDX };
};

export const loadPhrases = (phrases: BlockOf100) => {
  return { type: LOAD_PHRASES, payload: phrases };
};

export const setBlock = (block: Phrase[]) => {
  return { type: SET_BLOCK, payload: block };
};
