import styled from 'styled-components';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../constants/appConstants';
import { ThemeContext } from '../contexts/themeContext';
import { useContext } from 'react';
import { SPACING } from '../constants/spacingConstants';

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  flex-direction: row;
  z-index: 1000;
  width: 100vw;
`;

const MainTitleContainer = styled.div`
  display: flex;
  flex: 1;
`

const TitleContainer = styled.div`
  width: 70vw;
  margin-left: ${SPACING.S_5}px;
  margin-right: ${SPACING.S_2}px;
  margin-bottom: ${SPACING.S_2}px;
  flex-direction: column;
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
  display: flex;
  flex: 1;
  justify-content: flex-end;
  justify-items: flex-end;
  justify-self: flex-end;
  align-self: center;
  align-items: center;
  margin-right: 48px;
  opacity: 0.8;
`

const Header = () => {
  const { theme, setTheme, setHasUserToggle } = useContext(ThemeContext);

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
  };

  return (
    <HeaderContainer style={{ backgroundColor: headerColor, boxShadow: boxShadowColor }}>
      <MainTitleContainer>
        <TitleContainer>
          <HeaderTitle>
            サーモン
          </HeaderTitle>
          <HeaderSubtitle style={{ color: subtitleColor }}>
            The <b>Salmon</b> Project
          </HeaderSubtitle>
        </TitleContainer>
      </MainTitleContainer>
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