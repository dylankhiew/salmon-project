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
  margin: ${SPACING.S_2}px;
  display: flex;
  flex-direction: column;
  width: 100vw;
`

const HeaderTitle = styled.div`
  color: ${COLOR_CONSTANTS.ACCENT};
  font-family: ${FONT_CONSTANTS.NOTO_SANS}, sans-serif;
  font-weight: 700;
  font-size: 64px;
`;

const HeaderSubtitle = styled.div`
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS}, sans-serif;
  font-weight: 300;
  font-size: 14px;
  text-align: left;
`;

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const subtitleColor = theme === 'light'
    ? COLOR_CONSTANTS.LIGHT.SUBTITLE
    : COLOR_CONSTANTS.DARK.SUBTITLE;

  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>
          サーモン
        </HeaderTitle>
        <HeaderSubtitle style={{ color: subtitleColor }}>
          THE <b>SUSHI</b> PROJECT
        </HeaderSubtitle>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;