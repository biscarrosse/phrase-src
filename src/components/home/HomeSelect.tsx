// React:
import React from 'react';
// Redux>
import { setFrom, setTo, setLevel } from '../../store/language/actions';
import { useDispatch } from 'react-redux';
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

export const HomeSelect = () => {
  const dispatch = useDispatch();

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

  return (
    <Center className="select">
      <SpaceBetween width={85}>
        <Pulse shouldPulse={true}>
          <Select onChange={e => handleSelect(e, LANGS.FROM)} id={LANGS.FROM}>
            {mapListOf(LANGS.LANGUAGE_OPTIONS)}
          </Select>
        </Pulse>
        <FontAwesomeIcon icon={'chevron-right'} size="1x" />
        <Pulse shouldPulse={false}>
          <Select onChange={e => handleSelect(e, LANGS.TO)} id={LANGS.TO}>
            {mapListOf(LANGS.LANGUAGE_OPTIONS)}
          </Select>
        </Pulse>
        <Horizontal>
          <P>Level:</P>
          <Pulse shouldPulse={true}>
            <Select
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
