import styled from 'styled-components';
import * as PALETTE from './colors.style';
import * as SIZE from '../../constants/buttonSizes';
import * as POSITION from '../../constants/position';

interface WrapProps {
  backgroundColor: string;
}
export const Wrap = styled.div<WrapProps>`
  margin: 0;
  padding: 1rem;

  border: none;
  border-radius: 0.2rem;

  background-color: ${props => {
    const found = PALETTE.colorList.find(
      i => i.colorName === props.backgroundColor
    );
    if (found) return found.hexValue;
    return `initial`;
  }};
`;
