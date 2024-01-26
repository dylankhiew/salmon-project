import styled from 'styled-components';

import Card from '../Card';
import { SPACING } from '../../constants/spacingConstants';
import { COLOR_CONSTANTS } from '../../constants/colorConstants';
import { FONT_CONSTANTS } from '../../constants/fontConstants';

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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
const CardSpacer = styled.div`
  height: 108px;
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
          <CardSubtitle>
            Who this?
          </CardSubtitle>
          <CardTitle>
            Dylan Khiew
          </CardTitle>
        <CardSpacer />
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