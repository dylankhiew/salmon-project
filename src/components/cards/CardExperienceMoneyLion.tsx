import styled from 'styled-components';
import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../../constants/appConstants';
import Card from '../Card';
import { SPACING } from '../../constants/spacingConstants';
import moneylion from '../../assets/moneylion.png';

const CardContainer = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  color: ${COLOR_CONSTANTS.OFF_BLACK};
`

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.OFF_BLACK};
`
const CardImageContainer = styled.div`
  align-self: center;
  justify-content: center;
  padding: ${SPACING.S_2};
  margin-bottom: 24px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 2px solid ${COLOR_CONSTANTS.DARK.BACKGROUND};
`;

const CardInfo = styled.div`
  background-color: ${COLOR_CONSTANTS.WHITE};
  border-radius: 12px;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 300;
  padding: ${SPACING.S_2}px;
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: ${SPACING.S_0}px;
`;

const CardFooter = styled.div`
  text-align: right;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
`;

const CardExperienceMoneyLion = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.MONEYLION}>
      <CardContainer>
        <CardHeaderContainer>
          <CardImageContainer>
            <CardImage src={moneylion} alt="Profile"/>
          </CardImageContainer>
          <CardTitleContainer>
            <CardSubtitle>
              Mobile Engineer
            </CardSubtitle>
            <CardTitle>
              MoneyLion
            </CardTitle>
          </CardTitleContainer>
        </CardHeaderContainer>
        <CardInfo>
          <b>Summary</b>
          <br></br>
          Was part of the Crypto and Banking team where I was in charge of certain modules, provided necessary guidance and implemented user stories in an agile environment.
        </CardInfo>
        <CardInfo>
          <b>Tech Stack</b>
          <br></br>
          React Native, TypeScript, Redux, Redux Saga, ReactJS
        </CardInfo>
      </CardContainer>
      <CardFooter>
        Apr 2021 to Nov 2022
      </CardFooter>
    </Card>
  )
};

export default CardExperienceMoneyLion;