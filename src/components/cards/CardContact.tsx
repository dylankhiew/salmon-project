import styled from 'styled-components';
import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../../constants/appConstants';
import Card from '../Card';
import { SPACING } from '../../constants/spacingConstants';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import cv from '../../assets/cv.pdf';
import { BsEnvelopeAtFill, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const CardContainer = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
`

const CardTitleContainer = styled.div`
  margin-left: ${SPACING.S_2}px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const CardTitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 28px;
  font-weight: 700;
`;

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  font-weight: 300;
`;

const CardInfo = styled.a`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 300;
  padding: ${SPACING.S_2}px;
  font-size: 12px;
  opacity: 0.7;
  border-radius: 12px;
  margin-bottom: ${SPACING.S_2}px;
  justify-content: center;
  align-items: center;
  display: flex;
  align-content: center;
  flex-direction: row;
`;

const CardInfoText = styled.div`
  margin-left: ${SPACING.S_2}px;
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`

const CardFooter = styled.a`
  text-align: right;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  font-weight: 300;
  text-decoration: none;
`;

const CardContact = () => {
  const { theme }= useContext(ThemeContext);

  const backgroundColor = theme === 'dark'
    ? COLOR_CONSTANTS.OFF_BLACK
    : COLOR_CONSTANTS.OFF_WHITE;

  const fontColor =  theme === 'dark'
    ? COLOR_CONSTANTS.DARK.SUBTITLE
    : COLOR_CONSTANTS.LIGHT.SUBTITLE;

  const cardInfoBackgroundColor = theme === 'dark'
    ? COLOR_CONSTANTS.DARK.BACKGROUND
    : COLOR_CONSTANTS.LIGHT.BACKGROUND;

  return (
    <Card backgroundColor={backgroundColor} shouldRotate={false}>
      <CardContainer>
        <CardHeaderContainer>
          <CardTitleContainer>
            <CardSubtitle style={{ color: fontColor }}>
              Thanks for staying
            </CardSubtitle>
            <CardTitle style={{ color: fontColor }}>
              Keep in touch!
            </CardTitle>
          </CardTitleContainer>
        </CardHeaderContainer>
        <CardInfo style={{ backgroundColor: cardInfoBackgroundColor }} href='https://www.linkedin.com/in/dylankhiew/' about="_blank">
          <BsLinkedin size={20} color={fontColor} />
          <CardInfoText style={{ color: fontColor}}>
            LinkedIn
          </CardInfoText>
        </CardInfo>
        <CardInfo style={{ backgroundColor: cardInfoBackgroundColor }} href="https://github.com/dylankhiew" about="_blank">
          <BsGithub size={20} color={fontColor} />
          <CardInfoText style={{ color: fontColor}}>
            GitHub
          </CardInfoText>
        </CardInfo>
        <CardInfo style={{ backgroundColor: cardInfoBackgroundColor }} href="https://wa.me/601116759150" about="_blank">
          <BsWhatsapp size={20} color={fontColor} />
          <CardInfoText style={{ color: fontColor}}>
            WhatsApp
          </CardInfoText>
        </CardInfo>
        <CardInfo style={{ backgroundColor: cardInfoBackgroundColor }} href="mailto:dylankhiew@gmail.com" about="_blank">
          <BsEnvelopeAtFill size={20} color={fontColor} />
          <CardInfoText style={{ color: fontColor}}>
            Mail
          </CardInfoText>
        </CardInfo>
      </CardContainer>
      <CardFooter href={cv} about='_blank' style={{ color: fontColor }}>
        Download my resume here.
      </CardFooter>
    </Card>
  )
};

export default CardContact;