export const FROM = `FROM`;
export const TO = `TO`;
export const LEVEL = `LEVEL`;

export interface Language {
  language: string;
}

export interface Level {
  level: string;
}

export interface LanguageAction {
  type: typeof FROM | typeof TO;
  payload: Language;
}
export interface LevelAction {
  type: typeof LEVEL;
  payload: Level;
}
