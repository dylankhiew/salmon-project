import styled from 'styled-components';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../constants/appConstants';
import { ThemeContext } from '../contexts/themeContext';
import { useContext, useEffect } from 'react';
import { SPACING } from '../constants/spacingConstants';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  flex-direction: row;
  z-index: 1000;
`;

const TitleContainer = styled.div`
  margin-left: ${SPACING.S_2}px;
  margin-right: ${SPACING.S_2}px;
  margin-bottom: ${SPACING.S_2}px;
  display: flex;
  flex-direction: column;
  width: 70vw;
`

const HeaderTitle = styled.div`
  color: ${COLOR_CONSTANTS.ACCENT};
  font-family: ${FONT_CONSTANTS.NOTO_SANS}, sans-serif;
  font-weight: 700;
  font-size: 48px;
`;

const HeaderSubtitle = styled.div`
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS}, sans-serif;
  font-weight: 300;
  font-size: 12px;
  text-align: left;
`;

const HeaderToggle = styled.div`
  right: 0;
  flex: 1;
  justify-content: end;
  align-self: center;
  align-items: center;
  margin-right: 48px;
  width: 30vh;
  opacity: 0.8;
`

const Header = () => {
  const { theme, setTheme, setHasUserToggle } = useContext(ThemeContext);
  const documentThemeColor = document.querySelector('meta[name="theme-color"]');

  const isLightTheme = theme === 'light';

  const subtitleColor = isLightTheme
    ? COLOR_CONSTANTS.LIGHT.SUBTITLE
    : COLOR_CONSTANTS.DARK.SUBTITLE;

  const headerColor = isLightTheme
    ? COLOR_CONSTANTS.LIGHT.BACKGROUND
    : COLOR_CONSTANTS.DARK.BACKGROUND;

  const boxShadowColor = isLightTheme
    ? '5px 10px 15px -20px #111111'
    : '0px 15px 10px -15px #111111';

  const handleOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setHasUserToggle(true);

    // Set theme color
    if (documentThemeColor) {
      const updatedColor = theme === 'dark'
        ? COLOR_CONSTANTS.DARK.BACKGROUND
        : COLOR_CONSTANTS.LIGHT.BACKGROUND;

        documentThemeColor.setAttribute('content', updatedColor);
    }
  };

  return (
    <HeaderContainer style={{ backgroundColor: headerColor, boxShadow: boxShadowColor }}>
      <div>
        <TitleContainer>
          <HeaderTitle>
            サーモン
          </HeaderTitle>
          <HeaderSubtitle style={{ color: subtitleColor }}>
            THE <b>SALMON</b> PROJECT
          </HeaderSubtitle>
      </TitleContainer>
      </div>
      <HeaderToggle>
        <Toggle
          onChange={() => {}}
          checked={theme === 'dark'}
          icons={{
            checked: <BsFillMoonFill size={12} color="white" />,
            unchecked: <BsFillSunFill size={12} color="white" />
          }}
          onClick={handleOnClick}
        />
      </HeaderToggle>
    </HeaderContainer>
  );
};

export default Header;