import styled from 'styled-components';

interface BtnProps {
  size: string;
  color: string;
  position?: string;
  // onClick?: () => void;
}
export const Btn = styled.button<BtnProps>`
  margin: 0;
  padding: 0;
  margin: ${props => {
    if (props.position === 'left') {
      return '0 1rem 0 0';
    } else if (props.position === 'right') {
      return '0 0 0 1rem';
    } else return '0'; // 'mid'
  }};
  width: ${props => {
    return props.size === 'big'
      ? '80%'
      : props.size === 'mid'
      ? '200px'
      : 'inherit';
  }};
  background-color: ${props => (props.color ? `${props.color}` : 'none')};
  color: ${props => (props.color ? `${props.theme.alwaysWhite}` : 'inherit')};
  border: none;
  border-radius: 0.2rem;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
