import styled from 'styled-components';

interface WrapProps {
  backgroundColor: string;
}
export const Wrap = styled.div<WrapProps>`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0.2rem;
`;
