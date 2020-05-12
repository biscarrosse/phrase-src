export const SHOW_ANSWER = `SHOW_ANSWER`;
export const SHOW_QUESTION = `SHOW_QUESTION`;
export const LOAD_PHRASES = `LOAD_PHRASES`;

export interface ExerciseAction {
  type: typeof SHOW_ANSWER | typeof SHOW_QUESTION;
}

interface Phrase {
  id: string;
  [key: string]: string;
}

// n keys of x name:
export interface PhrasesPayload {
  [key: string]: Phrase;
}

export interface EachPhrase {
  id: string; // { id: 7, english: 'english 7', spanish: 'spanish 7', czech: 'czech 7' }
  [key: string]: string;
}

export interface Phrases {
  id: string;
  phrases: Array<EachPhrase>;
}

// {
//   name: "language_data",
//   items: {
//       "block_1": {
//           id: 1,
//           size: 10
//       },
//       "block_2": {
//           "phrases": {
//                id: 2,
//                size: 34
//            },
//            {
//                id: 2,
//                size: 34
//            }
//       }
//   }
// }
export interface Item {
  id: number;
  size: number;
}

export interface Example {
  name: string;
  items: {
    [key: string]: Item;
  };
}
