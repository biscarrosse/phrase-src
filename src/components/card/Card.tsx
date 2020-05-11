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
// import { H2 } from '../styles/text.style';
// import { Horizontal, Flex, Margin } from '../styles/common.style';
// // Libraries:
// import { GrClose } from 'react-icons/gr';

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
    </Wrap>
  );
};

export default Card;
