import React from 'react';
import { Btn } from '../styles/button.style';
import { H1, H2, P } from '../styles/text.style';
import * as PALETTE from '../styles/colors.style';
import * as SIZE from '../../constants/buttonSizes';

interface BtnProps {
  size: string; // 'big', 'mid', 'small'
  color: string; // from palette
  textColor: string; // from palette
  text: string; // btn text
  textSize: string; // btn text
  disabled?: boolean; // true || false
  // clickAction?: () => void; // no return func
}
const Button = ({
  size,
  color,
  textColor,
  text,
  textSize,
  disabled
}: BtnProps) => {
  console.log(
    'Button props:',
    size,
    color,
    textColor,
    text,
    textSize,
    disabled
  );

  const gimmeText = (size: string): JSX.Element => {
    if (textSize === SIZE.BIG)
      return <H1 style={{ padding: '0.4rem' }}>{text}</H1>;
    if (textSize === SIZE.MID)
      return <H2 style={{ padding: '0.3rem' }}>{text}</H2>;
    return <P style={{ padding: '0.2rem' }}>{text}</P>;
  };

  return (
    <Btn
      size={size}
      color={disabled === true ? `${PALETTE.GREY}` : color}
      textColor={textColor}
    >
      {size && gimmeText(size)}
    </Btn>
  );
};

export default Button;
