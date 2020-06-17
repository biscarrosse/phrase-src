// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { openToast, closeToast } from '../../store/toast/actions';
import { insertLangData } from '../../store/exercise/actions';
import { LANG_ARR } from '../../store/exercise/types';
// Router:
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from 'react-router-dom';
// Components:
import { HomeSelect as Select } from './HomeSelect';
import { HomeSiteMotto as Motto } from './HomeSiteMotto';
import Button from '../button/Button';
import Pulse from '../pulse/Pulse';
import { Center, Vertical, FullWidth, Margin } from '../styles/common.style';
// Constants:
import * as TEXT from '../../constants/commonText';
import * as SIZE from '../../constants/buttonSizes';
import * as EMOJI from '../../constants/emoticons';
import * as COLOR from '../../constants/buttonColors';
import * as NAV from '../../constants/navigation';
// Services:
import { fetchData } from '../../services/index';
// Libraries:
import { isEmpty } from 'lodash';

const Home = () => {
  const [pulse, setPulse] = useState<boolean>(false);

  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    console.log('Feed did mnt', history, location, params, match);
  }, []);

  useEffect(() => {
    if (
      originLanguage !== null &&
      targetLanguage !== null &&
      selectedLevel !== null &&
      pulse === false
    ) {
      setPulse(true);
    } else return;
  }, [originLanguage, targetLanguage, selectedLevel]);

  const startExercise = async () => {
    if (
      originLanguage !== null &&
      targetLanguage !== null &&
      selectedLevel !== null
    ) {
      const dataArr: LANG_ARR = await fetchData(selectedLevel);
      console.log('res---', dataArr);
      Array.isArray(dataArr) &&
        !isEmpty(dataArr) &&
        dispatch(insertLangData(dataArr));
      history.push(NAV.EXERCISE);
      return;
    } else {
      dispatch(
        openToast({
          toastVisible: true,
          color: COLOR.YELLOW,
          emoticon: EMOJI.ANGRY,
          text: TEXT.MISSING_LANGUAGE_OPTIONS
        })
      );
    }
  };

  const signup = () => {
    console.log('signup');
  };

  return (
    <FullWidth className="home">
      <Vertical>
        <Motto />
        <Select />
        <Margin marginValue="1rem 0 1rem 0">
          <Pulse shouldPulse={pulse ? null : 'goForIt'}>
            <Center>
              <Button
                size={SIZE.BIG}
                color={COLOR.GREEN_LIME}
                textColor={COLOR.WHITE}
                text={TEXT.MAIN_CALL_TO_ACTION}
                textSize={SIZE.BIG}
                action={startExercise}
              />
            </Center>
          </Pulse>
        </Margin>
        <Margin marginValue="0 0 1rem 0">
          <Center>
            <Button
              size={SIZE.BIG}
              color={COLOR.BLUE}
              textColor={COLOR.WHITE}
              text={TEXT.SIGNUP_CALL_TO_ACTION}
              textSize={SIZE.MID}
              action={signup}
            />
          </Center>
        </Margin>
      </Vertical>
    </FullWidth>
  );
};

export default Home;
