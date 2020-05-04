import { FROM, TO, LEVEL, Language, Level } from './types';

export const setFrom = (language: Language) => {
  return { type: FROM, payload: language };
};

export const setTo = (language: Language) => {
  return { type: TO, payload: language };
};

export const setLevel = (level: Level) => {
  return { type: LEVEL, payload: level };
};
