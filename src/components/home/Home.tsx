// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
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
import * as COLOR from '../../constants/buttonColors';

const Home = () => {
  // interface PulseState {
  //   shouldPulse: boolean;
  // }
  const [pulse, setPulse] = useState<boolean>(false);

  const { from, to, level } = useSelector((state: AppState) => state.language);

  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    console.log('Feed did mnt - pulse', pulse);
    console.log('Feed did mnt', history, location, params, match);
  }, []);

  const pica = () => {
    setPulse(true);
    setTimeout(() => console.log('pica is done', pulse), 1000);
  };

  useEffect(() => {
    console.log('Home effect, from, to, level', from, to, level);
    if (from !== null && to !== null && level !== null && pulse === false) {
      console.log('will set pulse to true', pulse);
      pica();
      // (async function anyNameFunction() {
      //   await setPulse(true);
      // })(); // IIFE
      // setTimeout(() => console.log(pulse), 1000);
    } else return;
  }, [from, to, level]);

  const startExercise = () => {
    console.log('startExercise');
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
          <Pulse shouldPulse={pulse ? null : 'gogogo'}>
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
        <h1>{pulse ? 'jo kurva' : 'ne, do pice'}</h1>
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