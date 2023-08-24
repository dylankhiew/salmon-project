import styled from 'styled-components';
import TinderCard from 'react-tinder-card'

import CardFront from './cards/CardFront';
import CardIntro from './cards/CardIntro';
import CardExperienceOne from './cards/CardExperienceOne';
import CardContact from './cards/CardContact';
import CardExperienceThree from './cards/CardExperienceThree';
import CardExperienceTwo from './cards/CardExperienceTwo';

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
`;

// Front card should be last
const CARD_STACK: JSX.Element[] = [
    <CardContact />,
    <CardExperienceThree />,
    <CardExperienceTwo />,
    <CardExperienceOne />,
    <CardIntro />,
    <CardFront />,
];

const CardStacks = () => {
    const renderCard = (item: JSX.Element, index: number, items: JSX.Element[]) => {
        const isFirst = index === 0;
        const preventSwipe = isFirst ? ['up', 'down', 'left', 'right'] : [];

        return (
            <TinderCard
                key={`card-stack-${index + 1}`}
                onSwipe={() => {}}
                className='swipe'
                preventSwipe={preventSwipe}
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