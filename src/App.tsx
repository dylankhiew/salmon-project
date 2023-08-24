import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './contexts/themeContext';
import { COLOR_CONSTANTS } from './constants/appConstants';
import Header from './components/Header';
import ThemeButton from './components/ThemeButton';
import CardStacks from './components/CardStacks';
import './App.css';
import background from './assets/background.jpg';

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
`;

const MainContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

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
        <BackgroundImage />
        <Header />
        <CardStacks />
        <ThemeButton />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
