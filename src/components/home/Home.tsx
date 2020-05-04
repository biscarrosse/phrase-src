// React:
import React, { useEffect } from 'react';
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
import { Center, Vertical, FullWidth, Margin } from '../styles/common.style';
// Constants:
import * as TEXT from '../../constants/commonText';
import * as SIZE from '../../constants/buttonSizes';
import * as COLOR from '../../constants/buttonColors';

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    console.log('Feed did mnt', history, location, params, match);
  }, []);

  return (
    <FullWidth className="home">
      <Vertical>
        <Motto />
        <Select />
        <Margin marginValue="1rem 0 1rem 0">
          <Center>
            <Button
              size={SIZE.BIG}
              color={COLOR.GREEN_LIME}
              textColor={COLOR.WHITE}
              text={TEXT.MAIN_CALL_TO_ACTION}
              textSize={SIZE.BIG}
            />
          </Center>
        </Margin>
        <Margin marginValue="0 0 1rem 0">
          <Center>
            <Button
              size={SIZE.BIG}
              color={COLOR.BLUE}
              textColor={COLOR.WHITE}
              text={TEXT.SIGNUP_CALL_TO_ACTION}
              textSize={SIZE.MID}
            />
          </Center>
        </Margin>
      </Vertical>
    </FullWidth>
  );
};

export default Home;
