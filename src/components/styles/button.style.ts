import styled, { css, keyframes } from 'styled-components';
import * as PALETTE from './colors.style';
import * as SIZE from '../../constants/buttonSizes';
import * as POSITION from '../../constants/position';

interface BtnProps {
  size: string;
  color: string;
  textColor: string;
  position?: string;
  // onClick?: () => void;
}
export const Btn = styled.button<BtnProps>`
  margin: 0;
  padding: 0;
  margin: ${props => {
    if (props.position === POSITION.LEFT) return '0 1rem 0 0';
    if (props.position === POSITION.RIGHT) return '0 0 0 1rem';
    return '0';
  }};
  width: ${props => {
    return props.size === SIZE.BIG
      ? '85%'
      : props.size === SIZE.MID
      ? '65%'
      : 'inherit';
  }};
  min-height: 5rem;
  background-color: ${props => {
    const found = PALETTE.colorList.find(i => i.colorName === props.color);
    if (found) return found.hexValue;
    return `initial`;
  }};
  color: ${props => {
    const found = PALETTE.colorList.find(i => i.colorName === props.textColor);
    if (found) return found.hexValue;
    return `inherit`;
  }};
  border: none;
  border-radius: 0.2rem;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animation = () => {
  return css`
    ${pulse} {2s} infinite;
  `;
};

const PulseButton = styled.button`
  animation: ${animation};
`;

export const Pulse = styled.div`
  border: 2px solid greenyellow;
  background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 2s infinite;
`;
