import styled from 'styled-components';

import Card from '../Card';
import { SPACING } from '../../constants/spacingConstants';
import naluri from '../../assets/naluri.png';
import { COLOR_CONSTANTS } from '../../constants/colorConstants';
import { FONT_CONSTANTS } from '../../constants/fontConstants';

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
  color: ${COLOR_CONSTANTS.WHITE};
`

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 12px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.WHITE};
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
  border: 1px solid ${COLOR_CONSTANTS.OFF_WHITE};
`;

const CardInfo = styled.div`
  background-color: ${COLOR_CONSTANTS.NALURI_SECONDARY};
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
  color: ${COLOR_CONSTANTS.WHITE};
`;

const CardExperienceNaluri = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.NALURI}>
      <CardContainer>
        <CardHeaderContainer>
          <CardImageContainer>
            <CardImage src={naluri} alt='Profile'/>
          </CardImageContainer>
          <CardTitleContainer>
            <CardSubtitle>
              Mobile Engineer
            </CardSubtitle>
            <CardTitle>
              Naluri
            </CardTitle>
          </CardTitleContainer>
        </CardHeaderContainer>
        <CardInfo>
          <b>Company Background</b>
          <br></br>
          Naluri is a digital care provider and healthcare cost-containment solution.
        </CardInfo>
        <CardInfo>
          <b>Description</b>
          <br></br>
          During my time in the mobile team, we worked on a roadmap initiative which includes a major design overhaul, enforcing TypeScript
          as well as implementing Relay as the new state management framework.
        </CardInfo>
        <CardInfo>
          <b>Tech Stack</b>
          <br></br>
          React Native, TypeScript, Redux, Relay, GraphQL
        </CardInfo>
      </CardContainer>
      <CardFooter>
        Nov 2022 to Mar 2023
      </CardFooter>
    </Card>
  )
};

export default CardExperienceNaluri;