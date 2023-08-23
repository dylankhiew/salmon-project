import styled from "styled-components";
import { COLOR_CONSTANTS, FONT_CONSTANTS } from "../constants/appConstants";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import { SPACING } from "../constants/spacingConstants";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
`;

const TitleContainer = styled.div`
  margin-left: ${SPACING.S_2}px;
  margin-bottom: ${SPACING.S_1}px;
  display: flex;
  flex-direction: column;
  width: 100vw;
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

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const isLightTheme = theme === 'light';

  const subtitleColor = isLightTheme
    ? COLOR_CONSTANTS.LIGHT.SUBTITLE
    : COLOR_CONSTANTS.DARK.SUBTITLE;

  const headerColor = isLightTheme
    ? COLOR_CONSTANTS.LIGHT.BACKGROUND
    : COLOR_CONSTANTS.DARK.BACKGROUND

  const boxShadowColor = isLightTheme
    ? '5px 10px 15px -20px #111111'
    : '0px 15px 10px -15px #111111'

  return (
    <HeaderContainer style={{ backgroundColor: headerColor, boxShadow: boxShadowColor }}>
      <TitleContainer>
        <HeaderTitle>
          サーモン
        </HeaderTitle>
        <HeaderSubtitle style={{ color: subtitleColor }}>
          THE <b>SALMON</b> PROJECT
        </HeaderSubtitle>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;