import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './contexts/themeContext';
import { COLOR_CONSTANTS } from './constants/appConstants';
import Header from './components/Header';
import ThemeButton from './components/ThemeButton';
import CardStacks from './components/CardStacks';
import './App.css';

const MainContainer = styled.div`
  overflow: hidden;
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
        <Header />
        <CardStacks />
        <ThemeButton />
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
