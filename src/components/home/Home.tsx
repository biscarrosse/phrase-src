// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { openToast, closeToast } from '../../store/toast/actions';
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

const Home = () => {
  const [pulse, setPulse] = useState<boolean>(false);

  const { from, to, level } = useSelector((state: AppState) => state.language);

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
      from !== null &&
      to !== null &&
      level !== null &&
      pulse === false &&
      from !== TEXT.DUMMY &&
      to !== TEXT.DUMMY &&
      level !== TEXT.DUMMY
    ) {
      setPulse(true);
    } else return;
  }, [from, to, level]);

  const startExercise = () => {
    if (
      from !== null &&
      to !== null &&
      level !== null &&
      from !== TEXT.DUMMY &&
      to !== TEXT.DUMMY &&
      level !== TEXT.DUMMY
    ) {
      history.push('/exercise');
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
