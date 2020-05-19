// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useDispatch, useSelector } from 'react-redux';
import { closeToast } from '../../store/toast/actions';
import { AppState } from '../../store/store';
import { Phrase } from '../../store/exercise/types';
// Components:
import { Wrap } from '../styles/card.style';
// Utils:
import { gimmeText } from '../../utils/utils';
// Constants:
import { P } from '../styles/text.style';
// Style:
import { CenterBothAxis, Margin } from '../styles/common.style';
// Libraries:
import { AiFillSound } from 'react-icons/ai';

interface CardProps {
  color: string;
  text?: string;
  textSize: string;
}
const Card = ({ color, text = 'unset', textSize }: CardProps) => {
  const [LGTM, setLGTM] = useState({ phrase: '', idx: 0 });

  const { currentBlock, currentPhraseIdx } = useSelector(
    (state: AppState) => state.exercise
  );
  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

  useEffect(() => {
    console.log('CARD', currentBlock, currentPhraseIdx);

    const block: Phrase[] = currentBlock;
    if (block.length === 0) return;

    setLGTM({
      phrase: currentBlock[currentPhraseIdx][`${originLanguage}`],
      idx: currentPhraseIdx
    });
  }, [currentBlock, currentPhraseIdx]);

  const handleText = () => {
    if (LGTM.phrase !== '') {
      return gimmeText(textSize, LGTM.phrase);
    } else return null;
  };

  return (
    <Wrap className="card" backgroundColor={color}>
      {handleText()}
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
