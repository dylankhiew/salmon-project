import styled from "styled-components";
import { COLOR_CONSTANTS, FONT_CONSTANTS } from "../constants/appConstants";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import { SPACING } from "../constants/spacingConstants";

const ButtonContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 64px;
    align-items: center;
`;

const Button = styled.button`
  background-color: ${COLOR_CONSTANTS.ACCENT};
  border-radius: 20px;
  padding: ${SPACING.S_3}px;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 600;
  border: none;
  width: 100vw;
  margin-left: 20%;
  margin-right: 20%;
  color: ${COLOR_CONSTANTS.WHITE};
`;

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const buttonText = theme === 'dark' ? 'Light it up' : 'Dim it down';

  const handleOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ButtonContainer>
      <Button onClick={handleOnClick}>
        {buttonText}
      </Button>
    </ButtonContainer>
  );
};

export default Header;