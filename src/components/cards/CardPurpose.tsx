import styled from 'styled-components';
import Lottie from 'lottie-react';

import { CARD_STACK_CONFIG } from '../../constants/appConstants';
import Card from '../Card';
import { SPACING } from '../../constants/spacingConstants';
import { COLOR_CONSTANTS } from '../../constants/colorConstants';
import { FONT_CONSTANTS } from '../../constants/fontConstants';
import japanBackground from '../../assets/japan-background.json';
import { ThemeContext } from '../../contexts/themeContext';
import { useContext } from 'react';

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardTitleContainer = styled.div`
`

const CardTitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 32px;
  font-weight: 500;
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
`

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 14px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
`
const CardImageContainer = styled.div`
  margin-top: 32px;
  align-self: center;
  padding: ${SPACING.S_2};
  margin-bottom: 24px;
`;

const CardInfo = styled.div`
    font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
    font-weight: 300;
    padding: ${SPACING.S_2}px;
    font-size: 14px;
    margin-bottom: ${SPACING.S_0}px;
    line-height: 1.5;
`;

const LottieContainer = styled.div`
    position: absolute;
    flex-direction: row;
    display: flex;
    flex: 1;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    height: 90%;
    opacity: 0.08;
    margin-left: ${SPACING.S_4}px;
    margin-right: ${SPACING.S_4}px;
`;

const SalmonText = styled.div`
    color: ${COLOR_CONSTANTS.ACCENT};
    display: inline;
    font-weight: 700;
`;

const CardFooter = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 11px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.GRAY};
  text-align: center;
  margin-bottom: ${SPACING.S_1}px;
`;

const CardPurpose = () => {
    const { theme } = useContext(ThemeContext);

    const fontColor = theme === 'dark'
        ? COLOR_CONSTANTS.OFF_WHITE
        : COLOR_CONSTANTS.OFF_WHITE;

    const backgroundColor = theme === 'dark'
        ? COLOR_CONSTANTS.SAKURA
        : COLOR_CONSTANTS.SAKURA;

  return (
    <Card backgroundColor={backgroundColor}>
        <LottieContainer>
            <Lottie
                style={{ pointerEvents: 'none' }}
                animationData={japanBackground}
            />
        </LottieContainer>
        <CardContainer>
            <CardTitleContainer>
            <CardSubtitle style={{ color: fontColor }}>
                What this?
            </CardSubtitle>
            <CardTitle style={{ color: fontColor }}>
                My Portfolio
            </CardTitle>
            </CardTitleContainer>
            <CardImageContainer>
            </CardImageContainer>
            <CardInfo style={{ color: fontColor }}>
                A website to briefly introduce myself and showcase my work experiences.
            </CardInfo>
            <CardInfo style={{ color: fontColor }}>
                Inspired by flicking cards and the color palette of <SalmonText>salmon</SalmonText>. Figured let's make a website based on this!
            </CardInfo>
            <CardFooter style={{ color: fontColor }}>
                Happy swiping!
            </CardFooter>
        </CardContainer>
    </Card>
  )
};

export default CardPurpose;