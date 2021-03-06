// React:
import React from 'react';
// Style:
import { Btn } from '../styles/button.style';
import { H1, H2, P } from '../styles/text.style';
// Constants
import * as PALETTE from '../styles/colors.style';
import * as SIZE from '../../constants/buttonSizes';
import * as POSITION from '../../constants/position';
// Utils:
import { gimmeText } from '../../utils/utils';

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
      {textSize && text && gimmeText(textSize, text)}
    </Btn>
  );
};

export default Button;
