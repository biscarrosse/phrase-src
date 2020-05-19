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

// tier 5:
export interface Phrase {
  id: string;
  english: string;
  spanish: string;
  czech: string;
}
// tier 4:
export interface Phrases {
  phrases: Phrase[];
}
// tier 3:
export interface BlockOf10 {
  [key: string]: Phrases;
}
// tier 2:
export interface BlockOfLevels {
  [key: string]: BlockOf10;
}
// tier 1:
export interface BlockOf100 {
  name: string;
  data_of_100: BlockOfLevels;
}

// {
//   "name": "language_data",
//   "data_of_100": {
//     "level_A": {
//       "block_0": {
//         "phrases": [
//           {
//             "id": 1,
//             "english": "english 1",
//             "spanish": "spanish 1",
//             "czech": "czech 1"
//           },
//           {
//             "id": 2,
//             "english": "english 2",
//             "spanish": "spanish 2",
//             "czech": "czech 2"
//           },
//           {
//             "id": 3,
//             "english": "english 3",
//             "spanish": "spanish 3",
//             "czech": "czech 3"
//           }
//         ]
//       },
//       "block_1": {
//         "phrases": [
//           {
//             "id": 11,
//             "english": "english 11",
//             "spanish": "spanish 11",
//             "czech": "czech 11"
//           },
//           {
//             "id": 12,
//             "english": "english 12",
//             "spanish": "spanish 12",
//             "czech": "czech 12"
//           },
//           {
//             "id": 13,
//             "english": "english 13",
//             "spanish": "spanish 13",
//             "czech": "czech 13"
//           }
//         ]
//       }
//     },
//     "level_B": {
//       "block_0": {
//         "phrases": [
//           {
//             "id": 1,
//             "english": "english 1",
//             "spanish": "spanish 1",
//             "czech": "czech 1"
//           },
//           {
//             "id": 2,
//             "english": "english 2",
//             "spanish": "spanish 2",
//             "czech": "czech 2"
//           },
//           {
//             "id": 3,
//             "english": "english 3",
//             "spanish": "spanish 3",
//             "czech": "czech 3"
//           }
//         ]
//       },
//       "block_1": {
//         "phrases": [
//           {
//             "id": 11,
//             "english": "english 11",
//             "spanish": "spanish 11",
//             "czech": "czech 11"
//           },
//           {
//             "id": 12,
//             "english": "english 12",
//             "spanish": "spanish 12",
//             "czech": "czech 12"
//           },
//           {
//             "id": 13,
//             "english": "english 13",
//             "spanish": "spanish 13",
//             "czech": "czech 13"
//           }
//         ]
//       }
//     },
//     "level_C": {
//       "block_0": {
//         "phrases": [
//           {
//             "id": 1,
//             "english": "english 1",
//             "spanish": "spanish 1",
//             "czech": "czech 1"
//           },
//           {
//             "id": 2,
//             "english": "english 2",
//             "spanish": "spanish 2",
//             "czech": "czech 2"
//           },
//           {
//             "id": 3,
//             "english": "english 3",
//             "spanish": "spanish 3",
//             "czech": "czech 3"
//           }
//         ]
//       },
//       "block_1": {
//         "phrases": [
//           {
//             "id": 11,
//             "english": "english 11",
//             "spanish": "spanish 11",
//             "czech": "czech 11"
//           },
//           {
//             "id": 12,
//             "english": "english 12",
//             "spanish": "spanish 12",
//             "czech": "czech 12"
//           },
//           {
//             "id": 13,
//             "english": "english 13",
//             "spanish": "spanish 13",
//             "czech": "czech 13"
//           }
//         ]
//       }
//     }
//   }
// }
