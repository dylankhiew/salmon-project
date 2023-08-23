import styled from "styled-components";
import { COLOR_CONSTANTS, FONT_CONSTANTS } from "../constants/appConstants";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import { SPACING } from "../constants/spacingConstants";

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  bottom: 32px;
  align-items: center;
`;

const Button = styled.button`
  flex: 1;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background-color: ${COLOR_CONSTANTS.ACCENT};
  border-radius: 15px;
  padding: ${SPACING.S_3}px;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 600;
  border: none;
  width: 100vw;
  margin-left: 20%;
  margin-right: 20%;
  color: ${COLOR_CONSTANTS.WHITE};
  box-shadow: 5px 10px 15px -20px #111111;
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