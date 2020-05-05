import styled from 'styled-components';
import * as PALETTE from './colors.style';

export const ToastWrap = styled.div`
  margin: 0;
  padding: 0;
  height: 80px;
  min-width: 200px;
  width: 80%;
  background-color: ${PALETTE.WHITE};
  -webkit-box-shadow: 10px 10px 62px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 62px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 62px -4px rgba(0, 0, 0, 0.75);
`;

interface HeaderProps {
  color: string;
}
export const Header = styled.div<HeaderProps>`
  margin: 0;
  padding: 0;
  height: 30px;
  width: 100%;
  background-color: ${props => `${props.color}`};
`;
