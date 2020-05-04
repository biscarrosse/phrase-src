// React:
import React from 'react';
// Style:
import { Center, SpaceBetween } from '../styles/common.style';
// Components:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Constants:
import * as LANGS from '../../constants/languages';

export const HomeSelect = () => {
  interface LangProps {
    id: string;
    name: string;
  }
  interface LevelProps {
    id: string;
    name: string;
  }

  const mapListOf = (langs: Array<LangProps> | Array<LevelProps>) =>
    langs.map(i => (
      <option key={i.id} value={i.id}>
        {i.name}
      </option>
    ));

  return (
    <Center>
      <SpaceBetween width={85}>
        <select id="from">{mapListOf(LANGS.LANGUAGE_OPTIONS)}</select>
        <FontAwesomeIcon icon={'chevron-right'} size="1x" />
        <select id="to">{mapListOf(LANGS.LANGUAGE_OPTIONS)}</select>
        <select id="level">{mapListOf(LANGS.LEVELS)}</select>
      </SpaceBetween>
    </Center>
  );
};
