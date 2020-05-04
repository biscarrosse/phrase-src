import { FROM, TO, LEVEL, LanguageAction, LevelAction } from './types';

const initState = {
  from: null,
  to: null,
  level: null
};

const languageReducer = (
  state = initState,
  action: LanguageAction | LevelAction
) => {
  switch (action.type) {
    case FROM:
      return { ...state, from: action.payload };
    case TO:
      return { ...state, to: action.payload };
    case LEVEL:
      return { ...state, level: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
