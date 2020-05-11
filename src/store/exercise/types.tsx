export const SHOW_ANSWER = `SHOW_ANSWER`;
export const SHOW_QUESTION = `SHOW_QUESTION`;

export interface ExerciseAction {
  type: typeof SHOW_ANSWER | typeof SHOW_QUESTION;
}
