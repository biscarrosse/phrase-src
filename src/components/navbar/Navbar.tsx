// React:
import React from 'react';
// Redux:
// import { useDispatch } from 'react-redux';
// import { toggleSidebar } from '../store/sidebar/actions';
// import { toggleDarkMode } from '../store/darkMode/actions';
// Deps:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SelectField from './SelectField';
import { H1 } from '../styles/text.style';
import {
  Center,
  Vertical,
  Horizontal,
  Margin,
  Flex
} from '../styles/common.style';

// lang reading out loud
const Navbar: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const toggle = () => dispatch(toggleSidebar());
  //   const toggleDark = () => dispatch(toggleDarkMode());
  //   const login = () => console.log('LOGIN FIRES');

  const handleLogoClick = () => {
    console.log('handleLogoClick');
  };

  const toggle = () => {
    console.log('toggle');
  };

  const handleClose = () => {
    console.log('handleLogoClick');
  };

  return (
    <Margin marginValue={'0.5rem 0'}>
      <Vertical>
        <Horizontal>
          <Flex grow={2}>
            <H1>{`<`}</H1>
          </Flex>
          <Flex grow={8} center={true}>
            <H1>PhraseSource</H1>
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
  );
};

export default Navbar;
