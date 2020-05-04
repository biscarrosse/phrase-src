import React from 'react';
import { Btn } from '../styles/button.style';
import { H1, H2, P } from '../styles/text.style';
import * as palette from '../styles/colors.style';

interface BtnProps {
  size: string; // 'big', 'mid', 'small'
  color: string; // from palette
  text: string; // btn text
  disabled?: boolean; // true || false
  // clickAction?: () => void; // no return func
}
const Button = ({ size, color, text, disabled }: BtnProps) => {
  console.log('Button props:', size, color, text, disabled);
  const gimmeText = (size: string): JSX.Element => {
    if (size === 'big') return <H1 style={{ padding: '0.2rem' }}>{text}</H1>;
    if (size === 'mid') return <H2 style={{ padding: '0.2rem' }}>{text}</H2>;
    return <P style={{ padding: '0.2rem' }}>{text}</P>;
  };

  const usedColor = (color: string) => {
    // ...
  };

  return (
    <Btn size={size} color={disabled === true ? `${palette.GREY}` : color}>
      {size && gimmeText(size)}
    </Btn>
  );
};

export default Button;
