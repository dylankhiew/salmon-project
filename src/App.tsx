import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './contexts/themeContext';
import { COLOR_CONSTANTS } from './constants/appConstants';
import Header from './components/Header';
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
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const documentThemeColor = document.querySelector('meta[name="theme-color"]');

  const [theme, setTheme] = useState<Salmon.ThemeType>('light');
  const [hasUserToggle, setHasUserToggle] = useState<boolean>(false);

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

  const updateColorScheme = useCallback(() => {
    const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const updatedColor: Salmon.ThemeType = isPreferDark
      ? 'dark'
      : 'light';

    setTheme(updatedColor);
  }, []);

  useEffect(() => {
      // Set unscrollable
      document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!hasUserToggle) {
      const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Initialise listener
      colorSchemeQuery.addEventListener('change', updateColorScheme);
  
      const themePreference = isPreferDark ? 'dark' : 'light';
  
      // Set theme color
      if (documentThemeColor) {
        const updatedColor = themePreference === 'dark'
          ? COLOR_CONSTANTS.DARK.BACKGROUND
          : COLOR_CONSTANTS.LIGHT.BACKGROUND;
  
          documentThemeColor.setAttribute('content', updatedColor);
      }
      setTheme(themePreference);
      setHasUserToggle(false);
    }
  }, [colorSchemeQuery, documentThemeColor, hasUserToggle, updateColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, hasUserToggle, setHasUserToggle }}>
      <MainContainer style={generateThemeStyling()}>
        <BackgroundImage />
        <Header />
        <CardStacks />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
