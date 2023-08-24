import styled from 'styled-components';
import TinderCard from 'react-tinder-card'

import { COLOR_CONSTANTS } from '../constants/appConstants';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

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

const Card = styled.div`
  height: 400px;
  width: 300px;
  background-color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  position: relative;
  border-radius: 16px;
`;

const CARD_STACK = [
  {},
  {},
  {},
  {},
  {},
];

const CardStacks = () => {
    const { theme } = useContext(ThemeContext);

    const renderCard = (item: any, index: number) => {
        const isDarkTheme = theme === 'dark';
    
        const isFirstItem = index === 0;
    
        const transform = !isFirstItem ? `rotate(${3 * index}deg)` : 'rotate(0deg)';
        const backgroundColor = isDarkTheme
            ?  `rgb(${10 * index}, ${10 * index}, ${10 * index})`
            :   `rgb(${50 * index}, ${50 * index}, ${50 * index})`;
        return (
            <TinderCard onSwipe={() => {}} className='swipe'>
                <Card style={{ transform, backgroundColor }} />
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