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
    console.log('select--', e.target.value);
    if (id === 'from') {
      dispatch(setFrom({ language: e.target.value }));
      return;
    }
    if (id === 'to') {
      dispatch(setTo({ language: e.target.value }));
      return;
    }
    dispatch(setLevel({ level: e.target.value }));
  };

  return (
    <Center className="select">
      <SpaceBetween width={85}>
        <Select onChange={e => handleSelect(e, 'from')} id="from">
          {mapListOf(LANGS.LANGUAGE_OPTIONS)}
        </Select>
        <FontAwesomeIcon icon={'chevron-right'} size="1x" />
        <Select onChange={e => handleSelect(e, 'to')} id="to">
          {mapListOf(LANGS.LANGUAGE_OPTIONS)}
        </Select>
        <Horizontal>
          <P>Level:</P>
          <Select onChange={e => handleSelect(e, 'level')} id="level">
            {mapListOf(LANGS.LEVELS)}
          </Select>
        </Horizontal>
      </SpaceBetween>
    </Center>
  );
};
