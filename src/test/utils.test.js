import React from 'react';
import renderer from 'react-test-renderer';
import { levelForData, gimmeText } from '../utils/utils';

test('UTILS - levelForData', () => {
  expect(levelForData('a')).toBe('level_A');
});
