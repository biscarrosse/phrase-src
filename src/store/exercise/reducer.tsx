import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  SET_BLOCK,
  ExerciseAction,
  BlockOf100
} from './types';
import { object } from 'prop-types';

interface InitState {
  isQuestion: true;
  isAnswer: boolean;
  phrases_data: BlockOf100 | {};
  completedBlocks: string[];
  currentBlock: [];
  currentPhraseIdx: 0;
}
const initState: InitState = {
  isQuestion: true,
  isAnswer: false,
  phrases_data: {},
  completedBlocks: ['duck'],
  currentBlock: [],
  currentPhraseIdx: 0
};

const exerciseReducer = (state = initState, action: ExerciseAction) => {
  switch (action.type) {
    case SHOW_ANSWER:
      return { ...state, isQuestion: false, isAnswer: true };
    case SHOW_QUESTION:
      return { ...state, isQuestion: true, isAnswer: false };
    case LOAD_PHRASES:
      return { ...state, phrases_data: { ...action.payload } }; // ...interface BlockOf100
    case SET_BLOCK:
      return { ...state, currentBlock: action.payload }; // Phrase[]
    default:
      return state;
  }
};

export default exerciseReducer;
