import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card'

import { ThemeContext } from './contexts/themeContext';
import { COLOR_CONSTANTS } from './constants/appConstants';
import Header from './components/Header';
import ThemeButton from './components/ThemeButton';

const MainContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: red;
  margin: 60px;
  margin-right: 600px;
  margin-top: 200px;
`;

const Card = styled.div`
  height: 400px;
  width: 300px;
  background-color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  position: absolute;
  border-radius: 12px;
`;

const CARD_STACK = [
  {},
  {},
  {},
]

const App = () => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<Salmon.ThemeType>('light');

  const generateThemeStyling = (): React.CSSProperties => {
    if (theme === 'dark') {
      return {
        backgroundColor: COLOR_CONSTANTS.DARK.BACKGROUND,
      }
    }

    return {
      backgroundColor: COLOR_CONSTANTS.LIGHT.BACKGROUND,
    }
  };

  useEffect(() => {
    // Set unscrollable
    document.body.style.overflow = "hidden";

    const themePreference = isBrowserDefaultDark() ? 'dark' : 'light';
    setTheme(themePreference);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContainer style={generateThemeStyling()}>
        <Header />
        <CardsContainer>
          {CARD_STACK.map((item, index: number) => {
            const transform = `rotate(${3 * index}deg)`;
            const backgroundColor = `rgb(${20 * index}, ${40 * index}, ${15 * index})`;
            return (
              <TinderCard onSwipe={() => {}} className='swipe'>
                <Card className='card' style={{ transform, backgroundColor }} />
              </TinderCard>
              );
            }
          )}
        </CardsContainer>
        <ThemeButton />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
