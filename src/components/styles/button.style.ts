import styled, { css, keyframes } from 'styled-components';
import * as PALETTE from './colors.style';
import * as SIZE from '../../constants/buttonSizes';
import * as POSITION from '../../constants/position';

interface BtnProps {
  size: string;
  color: string;
  fullWidth: boolean;
  textColor: string;
  position?: string;
  // onClick?: () => void;
}
export const Btn = styled.button<BtnProps>`
  margin: 0;
  padding: 0;
  margin: ${props => {
    if (props.position === POSITION.LEFT) return '0 0.5rem 0 0';
    if (props.position === POSITION.RIGHT) return '0 0 0 0.5rem';
    return '0';
  }};
  width: ${props => {
    return props.fullWidth === true
      ? '100%'
      : props.size === SIZE.BIG
      ? '85%'
      : props.size === SIZE.MID
      ? '65%'
      : 'inherit';
  }};
  min-height: ${props => {
    return props.size === SIZE.BIG
      ? '5rem'
      : props.size === SIZE.MID
      ? '3rem'
      : '2rem';
  }};

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
