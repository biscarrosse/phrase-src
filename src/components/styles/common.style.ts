import styled from 'styled-components';
// import * as palette from './colors';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-grow: 12;
  margin: 0 1.4rem;
`;

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
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
