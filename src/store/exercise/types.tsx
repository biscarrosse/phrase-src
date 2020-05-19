export const SHOW_ANSWER = `SHOW_ANSWER`;
export const SHOW_QUESTION = `SHOW_QUESTION`;
export const LOAD_PHRASES = `LOAD_PHRASES`;
export const SET_BLOCK = `SET_BLOCK`;
export const SET_BLOCK_NAME = `SET_BLOCK_NAME`;
export const INCREASE_IDX = `INCREASE_IDX`;

export interface ExerciseAction {
  type:
    | typeof SHOW_ANSWER
    | typeof SHOW_QUESTION
    | typeof LOAD_PHRASES
    | typeof SET_BLOCK
    | typeof SET_BLOCK_NAME
    | typeof INCREASE_IDX;
  payload?: BlockOf100 | Phrases;
}

export interface Phrase {
  id: string;
  english: string;
  spanish: string;
  czech: string;
}
export interface Phrases {
  phrases: Phrase[];
}
export interface BlockOf10 {
  [key: string]: Phrases;
}
export interface BlockOf100 {
  name: string;
  data_of_100: BlockOf10;
}
// {
//   "name": "block_of_100_phrases",
//   "data_of_100": {
//     "block_10": {
//       "phrases": [
//         {
//           "id": 3,
//           "english": "english 3",
//           "spanish": "spanish 3",
//           "czech": "czech 3"
//         },
//         {
//           "id": 4,
//           "english": "english 4",
//           "spanish": "spanish 4",
//           "czech": "czech 4"
//         }
//       ]
//     },
//     "block_20": {
//       "phrases": [
//         {
//           "id": 3,
//           "english": "english 3",
//           "spanish": "spanish 3",
//           "czech": "czech 3"
//         },
//         {
//           "id": 4,
//           "english": "english 4",
//           "spanish": "spanish 4",
//           "czech": "czech 4"
//         }
//       ]
//     }
//   }
// }

// {
//   name: "test",
//   items: {
//       "a": {
//           id: 1,
//           size: 10
//       },
//       "b": {
//           id: 2,
//           size: 34
//       }
//   }
// }
// export interface Item {
//   id: number;
//   size: number;
// }

// export interface Example {
//   name: string;
//   items: {
//     [key: string]: Item;
//   };
// }
