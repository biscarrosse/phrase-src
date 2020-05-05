// React:
import React from 'react';
// Redux:
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
// Components:
import { ToastWrap, Header } from '../styles/toast.style';
import { H1, H2, P } from '../styles/text.style';
import {
  Center,
  Horizontal,
  Flex,
  CenterBothAxis,
  Vertical,
  Margin
} from '../styles/common.style';
import * as PALETTE from '../styles/colors.style';
// Libraries:
import { GrClose } from 'react-icons/gr';

interface ToastProps {
  color: string;
  emoticon: string;
  text: string;
  textSize?: string;
  action?: () => void;
  duration?: number;
}
//const Toast = ({ color, emoticon, text }: ToastProps) => {

const Toast = () => {
  const { toastVisible, color, emoticon, text } = useSelector(
    (state: AppState) => state.toast
  );

  return (
    <ToastWrap className="toast">
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
