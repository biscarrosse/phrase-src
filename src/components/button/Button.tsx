import React from 'react';
import { Btn } from '../styles/button.style';
import { H1, H2, P } from '../styles/text.style';
import * as PALETTE from '../styles/colors.style';
import * as SIZE from '../../constants/buttonSizes';
import * as POSITION from '../../constants/position';

interface BtnProps {
  size: string;
  color: string;
  textColor: string;
  text: string;
  textSize: string;
  action?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  left?: boolean;
  right?: boolean;
}
const Button = ({
  size,
  color,
  textColor,
  text,
  textSize,
  action,
  disabled = false,
  fullWidth = false,
  left = false,
  right = false
}: BtnProps) => {
  console.log(
    'Button props:',
    size,
    color,
    textColor,
    text,
    textSize,
    disabled,
    fullWidth,
    left,
    right
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
      className="button"
      size={size}
      color={disabled === true ? `${PALETTE.GREY}` : color}
      fullWidth={fullWidth ? true : false}
      textColor={textColor}
      onClick={action}
      position={left ? POSITION.LEFT : right ? POSITION.RIGHT : POSITION.UNSET}
    >
      {size && gimmeText(size)}
    </Btn>
  );
};

export default Button;
