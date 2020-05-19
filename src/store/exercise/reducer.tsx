import {
  SHOW_ANSWER,
  SHOW_QUESTION,
  LOAD_PHRASES,
  ExerciseAction,
  BlockOf100
} from './types';

interface InitState {
  isQuestion: true;
  isAnswer: boolean;
  question: any;
  answer: any;
  phrases_data: BlockOf100 | {};
  completedBlocks: [];
  currentBlock: [];
  currentPhraseIdx: 0;
}
const initState: InitState = {
  isQuestion: true,
  isAnswer: false,
  question: null,
  answer: null,
  phrases_data: {},
  completedBlocks: [],
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
    default:
      return state;
  }
};

export default exerciseReducer;
