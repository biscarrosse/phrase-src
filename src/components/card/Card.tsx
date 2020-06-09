// React:
import React, { useEffect, useState } from 'react';
// Redux:
import { useDispatch, useSelector } from 'react-redux';
import { closeToast } from '../../store/toast/actions';
import { resetCurrentPhraseIdx } from '../../store/exercise/actions';
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
  const [cardPhrase, setCardPhrase] = useState({ phrase: '', idx: 0 });
  const dispatch = useDispatch();
  const LAST_IDX = 2; // TODO: 9

  const { currentBlock, currentPhraseIdx, isQuestion } = useSelector(
    (state: AppState) => state.exercise
  );
  const {
    from: { language: originLanguage },
    to: { language: targetLanguage },
    level: { level: selectedLevel }
  } = useSelector((state: AppState) => state.language);

  useEffect(() => {
    console.log('CARD', currentBlock, currentPhraseIdx);
    // const { currentBlock, currentPhraseIdx} = useSelector(
    //   (state: AppState) => state.exercise
    // );
    const block: Phrase[] = currentBlock;
    if (block.length === 0) return;
    // const isLastPhraseOfBlock = false; // if else
    // isLastPhraseOfBlock && dispatch(resetCurrentPhraseIdx());
    console.log(
      'what is here',
      currentBlock,
      currentBlock[currentPhraseIdx - 1]
    );
    // reset current phrase idx to 0

    const lang = isQuestion ? originLanguage : targetLanguage;
    setCardPhrase({
      phrase: currentBlock[currentPhraseIdx][`${lang}`],
      idx: currentPhraseIdx
    });
  }, [currentBlock, currentPhraseIdx]);

  const handleText = () => {
    if (cardPhrase.phrase !== '') {
      return gimmeText(textSize, cardPhrase.phrase);
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
