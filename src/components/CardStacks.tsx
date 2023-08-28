import styled from 'styled-components';
import TinderCard from 'react-tinder-card'

import CardCover from './cards/CardCover';
import CardProfile from './cards/CardProfile';
import CardExperienceMoneyLion from './cards/CardExperienceMoneyLion';
import CardExperienceAEON from './cards/CardExperienceAEON';
import CardExperienceNaluri from './cards/CardExperienceNaluri';

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

// Front card should be last
const CARD_STACK: JSX.Element[] = [
    <CardExperienceMoneyLion />,
    <CardExperienceNaluri />,
    <CardExperienceAEON />,
    <CardProfile />,
    <CardCover />,
];

const CardStacks = () => {
    const renderCard = (
        item: JSX.Element,
        index: number,
    ) => {
        return (
            <TinderCard
                key={`card-stack-${index + 1}`}
                onSwipe={() => {}}
                className='swipe'
            >
                {item}
            </TinderCard>
        );
    };

    return (
        <CardsContainer>
            {CARD_STACK.map(renderCard)}
        </CardsContainer>
    );
}

export default CardStacks;