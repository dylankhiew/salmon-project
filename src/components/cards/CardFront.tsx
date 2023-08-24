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
  font-weight: 600;
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
  text-transform: uppercase;
`

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 14px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.LIGHT.BACKGROUND};
`
const CardImageContainer = styled.div`
  flex: 1;
  margin-top: 48px;
  align-self: center;
  padding: ${SPACING.S_2};
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

const CardFront = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.DARK_SALMON}>
      <CardContainer>
        <CardTitleContainer>
          <CardTitle>
            Dylan Khiew
          </CardTitle>
          <CardSubtitle>
            Mobile Engineer
          </CardSubtitle>
        </CardTitleContainer>
        <CardImageContainer>
          <CardImage src={profile} alt="Profile"/>
        </CardImageContainer>
      </CardContainer>
    </Card>
  )
};

export default CardFront;