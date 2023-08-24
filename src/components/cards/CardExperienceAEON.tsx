import styled from 'styled-components';
import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../../constants/appConstants';
import { SPACING } from '../../constants/spacingConstants';
import Card from '../Card';

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
  color: ${COLOR_CONSTANTS.AEON};
`;

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.AEON};
`;

const CardInfo = styled.div`
  background-color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 300;
  padding: ${SPACING.S_2}px;
  font-size: 12px;
  opacity: 0.7;
  border-radius: 12px;
  margin-bottom: ${SPACING.S_0}px;
`;

const CardFooter = styled.div`
  text-align: right;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  color: ${COLOR_CONSTANTS.AEON};
`;

const CardExperienceAEON = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.OFF_WHITE}>
      <CardContainer>
        <CardHeaderContainer>
          <CardTitleContainer>
            <CardSubtitle>
              Frontend Engineer
            </CardSubtitle>
            <CardTitle>
              ACS Digital
            </CardTitle>
          </CardTitleContainer>
        </CardHeaderContainer>
        <CardInfo>
          <b>Summary</b>
          <br></br>
          Part of the pioneers in building the mobile-first digital bank for AEON. Day to day tasks 
          includes enforcing best practises, building workflows, design system implementation as well as
          handling pod-related matters in a agile-based team.
        </CardInfo>
        <CardInfo>
          <b>Tech Stack</b>
          <br></br>
          React Native, TypeScript
        </CardInfo>
      </CardContainer>
      <CardFooter>
        Apr 2023 to present
      </CardFooter>
    </Card>
  )
};

export default CardExperienceAEON;