// React:
import React from 'react';
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

const Toast = () => {
  // show card --> slide to see answer via react-spring
  // listen btn
  // repeat btn
  // got it btn

  return (
    <ToastWrap>
      <Header color={PALETTE.YELLOW}>
        <Horizontal style={{ alignItems: 'center', height: '100%' }}>
          <Flex grow={11}>
            <Margin marginValue={'0 0 0 0.5rem'}>
              <H2>{`ಠ_ಠ`}</H2>
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
        <H2>Toast alert msg</H2>
      </Margin>
    </ToastWrap>
  );
};

export default Toast;
