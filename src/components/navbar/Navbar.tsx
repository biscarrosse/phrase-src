// React:
import React, { useEffect } from 'react';
// Redux:
// import { useDispatch } from 'react-redux';
// import { toggleSidebar } from '../store/sidebar/actions';
// import { toggleDarkMode } from '../store/darkMode/actions';
// Redux:
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { showAnswer, showQuestion } from '../../store/exercise/actions';
// Router:
import { useHistory, useLocation } from 'react-router-dom';
// Deps:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Constants:
import * as NAV from '../../constants/navigation';
import { H1, LightH1 } from '../styles/text.style';
import {
  Center,
  Vertical,
  Horizontal,
  Margin,
  Flex,
  FullWidth
} from '../styles/common.style';

// lang reading out loud
const Navbar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { isQuestion } = useSelector((state: AppState) => state.exercise);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('navbar location', location.pathname);
  }, [location]);
  //   const toggle = () => dispatch(toggleSidebar());
  //   const toggleDark = () => dispatch(toggleDarkMode());
  //   const login = () => console.log('LOGIN FIRES');

  const handleLogoClick = () => {
    console.log('handleLogoClick');
  };

  const toggle = () => {
    console.log('toggle');
  };

  const handleBack = () => {
    console.log('handleBack', location);
    // switch & props probably
    if (location.pathname === NAV.EXERCISE && !isQuestion) {
      dispatch(showQuestion());
      return;
    }
    if (location.pathname === NAV.EXERCISE && isQuestion) {
      history.push(NAV.HOME);
      return;
    }
    history.push(NAV.HOME);
  };

  return (
    <FullWidth className="navbar">
      <Margin marginValue={'0.5rem 0'}>
        <Vertical>
          <Horizontal>
            <Flex onClick={handleBack} grow={2}>
              {location.pathname === NAV.HOME ? null : (
                <FontAwesomeIcon icon={'chevron-left'} size="1x" />
              )}
            </Flex>
            <Flex grow={8} center={true}>
              <LightH1>PhraseSource</LightH1>
            </Flex>
            <Flex grow={2}>
              <FontAwesomeIcon
                onClick={toggle}
                icon={'bars'}
                size="1x"
                style={{ padding: 0 }}
              />
            </Flex>
          </Horizontal>
        </Vertical>
      </Margin>
    </FullWidth>
  );
};

export default Navbar;
