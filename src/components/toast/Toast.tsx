// React:
import React from 'react';
// Redux:
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
// Components:
import { ToastWrap, Header } from '../styles/toast.style';
import { H2 } from '../styles/text.style';
import { Horizontal, Flex, Margin } from '../styles/common.style';
// Libraries:
import { GrClose } from 'react-icons/gr';

const Toast = () => {
  const { toastVisible, color, emoticon, text } = useSelector(
    (state: AppState) => state.toast
  );

  return (
    <ToastWrap className={`toast ${toastVisible ? 'active' : ''}`}>
      <Header color={color}>
        <Horizontal style={{ alignItems: 'center', height: '100%' }}>
          <Flex grow={11}>
            <Margin marginValue={'0 0 0 0.5rem'}>
              <H2>{emoticon}</H2>
            </Margin>
          </Flex>
          <Flex grow={1}>
            <Margin marginValue={'0 0 0 1rem'}>
              <GrClose />
            </Margin>
          </Flex>
        </Horizontal>
      </Header>
      <Margin marginValue={'0.8rem'}>
        <H2>{text}</H2>
      </Margin>
    </ToastWrap>
  );
};

export default Toast;
