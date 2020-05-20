import styled from 'styled-components';
import * as PALETTE from './colors.style';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 12;
  margin: 0 1.4rem;
`;

export const Wrap = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  margin: 0;
  padding: 0;
  /*justify-content: center;*/
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const CenterVertical = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const CenterBothAxis = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Vertical = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Horizontal = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

interface SBProps {
  width: number;
}
export const SpaceBetween = styled.div<SBProps>`
  margin: 0;
  padding: 0;
  width: ${props => `${props.width}%`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FullWidth = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
`;

interface MarginProps {
  marginValue: string;
}
export const Margin = styled.div<MarginProps>`
  margin: 0;
  padding: 0;
  margin: ${props => `${props.marginValue}`};
`;

interface FlexProps {
  grow: number;
  center?: boolean;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-grow: ${props => `${props.grow}`};
  justify-content: ${props => (props.center ? `center` : `unset`)};
`;

export const Select = styled.select`
  margin: 0;
  padding: 0;
  height: 2rem;
  background: ${PALETTE.WHITE};
  font-size: 14px;
  border: none;

  option {
    background: ${PALETTE.WHITE};
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;
