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
import Button from './button/Button';
import { LightH1, P } from './styles/text.style';
import {
  Center,
  Horizontal,
  Vertical,
  FullWidth,
  Margin
} from './styles/common.style';
// Constants:
import * as TEXT from '../constants/commonText';
import * as SIZE from '../constants/buttonSizes';
import * as COLOR from '../constants/buttonColors';

const Feed = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    console.log('Feed did mnt', history, location, params, match);
  }, []);

  return (
    <FullWidth>
      <Vertical>
        <Margin marginValue="1rem">
          <Center>
            <LightH1 style={{ textAlign: 'center' }}>{TEXT.SITE_MOTTO}</LightH1>
          </Center>
        </Margin>
        <Center>
          <Horizontal>
            <P>ENG</P>
            <P>--></P>
            <P>SPA</P>
          </Horizontal>
        </Center>
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

export default Feed;
