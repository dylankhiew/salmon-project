import styled from 'styled-components';
import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../../constants/appConstants';
import Card from '../Card';
import profile from '../../assets/profile.jpeg';
import { SPACING } from '../../constants/spacingConstants';

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

const CardImage = styled.img`
  opacity: 0.9;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: 1px solid ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
`;

const CardInfo = styled.div`
  background-color: ${COLOR_CONSTANTS.WHITE};
  border-radius: 12px;
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-weight: 300;
  padding: ${SPACING.S_2}px;
  font-size: 12px;
  opacity: 0.4;
  margin-bottom: ${SPACING.S_0}px;
`;

const CardProfile = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.DARK_SALMON}>
      <CardContainer>
        <CardTitleContainer>
          <CardSubtitle>
            Who this?
          </CardSubtitle>
          <CardTitle>
            Dylan Khiew
          </CardTitle>
        </CardTitleContainer>
        <CardImageContainer>
          <CardImage src={profile} alt="Profile"/>
        </CardImageContainer>
        <CardInfo>
          More than four years of experience in mobile and software development, specialising in the <b>financial services</b> industry.
        </CardInfo>
        <CardInfo>
          Proficient in <b>React Native</b>, <b>TypeScript</b> and <b>Redux</b>.
        </CardInfo>
        <CardInfo>
          Hates raw salmon as much as bad codes.
        </CardInfo>
      </CardContainer>
    </Card>
  )
};

export default CardProfile;