import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './contexts/themeContext';
import { COLOR_CONSTANTS } from './constants/appConstants';
import Header from './components/Header';

const MainContainer = styled.div`
  height: 100vh;
`;

const App = () => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<Sushi.ThemeType>('light');

  const buttonText = theme === 'dark' ? 'Light it up' : 'Dim it down';

  const handleOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
    const themePreference = isBrowserDefaultDark() ? 'dark' : 'light';
    setTheme(themePreference);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContainer style={generateThemeStyling()}>
        <Header />
        <button onClick={handleOnClick}>
          {buttonText}
        </button>
      </MainContainer>
    </ThemeContext.Provider>
  );
}

export default App;
