import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import { BsArrowCounterclockwise } from 'react-icons/bs';

import CardCover from './cards/CardCover';
import CardProfile from './cards/CardProfile';
import CardExperienceMoneyLion from './cards/CardExperienceMoneyLion';
import CardExperienceAEON from './cards/CardExperienceAEON';
import CardExperienceNaluri from './cards/CardExperienceNaluri';
import { RefObject, createRef, useMemo, useRef, useState } from 'react';
import { COLOR_CONSTANTS } from '../constants/colorConstants';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-self: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-self: center;
  z-index: 100;
`;

const BackButton = styled.div`
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    display: flex;
    flex: 1;
    bottom: 0px;
    height: 40px;
    width: 40px;
    right: 0px;
    border-radius: 100px;
    position: absolute;
    margin: 20px;
    box-shadow: 1px 2px 400px 30px rgba(0,0,0,0.48);
    -webkit-box-shadow: 1px 2px 400px 30px rgba(0,0,0,0.48);
    -moz-box-shadow: 1px 2px 400px 30px rgba(0,0,0,0.48);
`;

// Front card should be last
const CARD_STACK: JSX.Element[] = [
    <CardExperienceMoneyLion />,
    <CardExperienceNaluri />,
    <CardExperienceAEON />,
    <CardProfile />,
    <CardCover />,
];

const CardStacks = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(CARD_STACK.length - 1);
    const currentIndexRef = useRef(currentIndex);
    const canGoBack = currentIndex < CARD_STACK.length - 1;

    const updateCurrentIndex = (value: number) => {
        setCurrentIndex(value);
        currentIndexRef.current = value;
      }
 
    const childRefs: RefObject<any>[] = useMemo(
        () =>
          Array(CARD_STACK.length)
            .fill(0)
            .map((_i) => createRef()),
        []
    );

    const handleOnSwipe = (index: number) => {
        updateCurrentIndex(index - 1);
    };

    const handleGoBack = async () => {
        if (canGoBack) {
            const newIndex = currentIndex + 1;
            updateCurrentIndex(newIndex);

            await childRefs[newIndex].current.restoreCard();
        }
    }

    const renderBackButton = () => {
        if (canGoBack) {
            return (
                <BackButton
                    onClick={handleGoBack}
                    style={{ backgroundColor: COLOR_CONSTANTS.DARK.BACKGROUND }}
                >
                    <BsArrowCounterclockwise color={COLOR_CONSTANTS.DARK.SUBTITLE} />
                </BackButton>
            );
        }
    };

    const renderCard = (
        item: JSX.Element,
        index: number,
    ) => {
        return (
            <TinderCard
                ref={childRefs[index]}
                key={`card-stack-${index + 1}`}
                onSwipe={() => handleOnSwipe(index)}
                className='swipe'
            >
                {item}
            </TinderCard>
        );
    };

    return (
        <>
            <CardsContainer>
                {CARD_STACK.map(renderCard)}
            </CardsContainer>
            {renderBackButton()}
        </>
    );
}

export default CardStacks;