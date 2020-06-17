// Libraries:
import { random } from 'lodash';
// Dummy data:
import { fakeData } from '../constants/simpleDummy';

export const fetchData = (level: string): any => {
  const miliseconds = random(200, 1200);
  // const fakeIP = `11.22.111.100`;
  const desiredLevel = level[level.length - 1].toUpperCase();
  const blockNum = 0;

  return new Promise((resolve, reject): any => {
    setTimeout(() => {
      if (true) {
        // @ts-ignore: TODO: https://stackoverflow.com/questions/34727936/typescript-bracket-notation-property-access
        resolve(fakeData[`level_${desiredLevel}_block_${blockNum}`]);
      }
      reject({ reason: 'just rejected' });
    }, miliseconds);
  });
};
