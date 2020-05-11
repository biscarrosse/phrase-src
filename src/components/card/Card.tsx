// React:
import React from 'react';
// Redux:
// import { useDispatch, useSelector } from 'react-redux';
// import { closeToast } from '../../store/toast/actions';
// import { AppState } from '../../store/store';
// Components:
import { Wrap } from '../styles/card.style';
// Utils:
import { gimmeText } from '../../utils/utils';
// Constants:
import * as SIZE from '../../constants/buttonSizes';
import { P } from '../styles/text.style';
// Style:
import {
  CenterBothAxis,
  Horizontal,
  Flex,
  Margin
} from '../styles/common.style';
// Libraries:
import { AiFillSound } from 'react-icons/ai';

interface CardProps {
  color: string;
  text: string;
  textSize: string;
}
const Card = ({ color, text, textSize }: CardProps) => {
  //   const dispatch = useDispatch();
  //   const { toastVisible, color, emoticon, text } = useSelector(
  //     (state: AppState) => state.toast
  //   );

  //   const handleClose = () => dispatch(closeToast());

  return (
    <Wrap className="card" backgroundColor={color}>
      {gimmeText(textSize, text)}
      <Margin marginValue="1rem 0 0 0">
        <CenterBothAxis>
          <Margin marginValue="0 0.5rem 0 0">
            <P>tap to listen</P>
          </Margin>
          <AiFillSound />
        </CenterBothAxis>
      </Margin>
    </Wrap>
  );
};

export default Card;
