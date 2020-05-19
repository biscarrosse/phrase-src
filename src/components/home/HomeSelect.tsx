// React:
import React from 'react';
// Redux>
import { setFrom, setTo, setLevel } from '../../store/language/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
// Style:
import {
  Center,
  SpaceBetween,
  Horizontal,
  Select
} from '../styles/common.style';
import { P } from '../styles/text.style';
// Components:
import Pulse from '../pulse/Pulse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Constants:
import * as LANGS from '../../constants/languages';
import * as TEXT from '../../constants/commonText';

export const HomeSelect = () => {
  const dispatch = useDispatch();
  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

  interface LangProps {
    id: string;
    name: string;
  }
  interface LevelProps {
    id: string;
    name: string;
  }

  const mapListOf = (langs: Array<LangProps> | Array<LevelProps>) => {
    // TODO: persist value from store if there is any
    console.log(
      'each select field',
      originLanguage,
      targetLanguage,
      selectedLevel
    );
    return langs.map(i => {
      return (
        <option key={i.id} value={i.id}>
          {i.name}
        </option>
      );
    });
  };

  // React.SyntheticEvent
  const handleSelect = (e: any, id: string) => {
    e.preventDefault();
    if (id === LANGS.FROM) {
      dispatch(setFrom({ language: e.target.value }));
      return;
    }
    if (id === LANGS.TO) {
      dispatch(setTo({ language: e.target.value }));
      return;
    }
    dispatch(setLevel({ level: e.target.value }));
  };

  //value={LANGS.LANGUAGE_OPTIONS[1].id}
  return (
    <Center className="select">
      <SpaceBetween width={85}>
        <Pulse shouldPulse={originLanguage}>
          <Select
            value={originLanguage}
            onChange={e => handleSelect(e, LANGS.FROM)}
            id={LANGS.FROM}
          >
            {mapListOf(LANGS.LANGUAGE_OPTIONS)}
          </Select>
        </Pulse>
        <FontAwesomeIcon icon={'chevron-right'} size="1x" />
        <Pulse shouldPulse={targetLanguage}>
          <Select
            value={targetLanguage}
            onChange={e => handleSelect(e, LANGS.TO)}
            id={LANGS.TO}
          >
            {mapListOf(LANGS.LANGUAGE_OPTIONS)}
          </Select>
        </Pulse>
        <Horizontal>
          <FontAwesomeIcon icon={'chevron-right'} size="1x" />
          <Pulse shouldPulse={selectedLevel}>
            <Select
              value={selectedLevel}
              onChange={e => handleSelect(e, LANGS.LEVEL)}
              id={LANGS.LEVEL}
            >
              {mapListOf(LANGS.LEVELS)}
            </Select>
          </Pulse>
        </Horizontal>
      </SpaceBetween>
    </Center>
  );
};
