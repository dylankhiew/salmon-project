import Card from '../Card';
import { styled } from 'styled-components';
import { SPACING } from '../../constants/spacingConstants';
import { COLOR_CONSTANTS } from '../../constants/colorConstants';
import { FONT_CONSTANTS } from '../../constants/fontConstants';
import sittingWork from '../../assets/sitting-work.json';
import Lottie from 'lottie-react';

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardTitleContainer = styled.div`
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-top: ${SPACING.S_2}px;
`

const CardTitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 32px;
  font-weight: 600;
  color: ${COLOR_CONSTANTS.GRAY};
  text-align: center;
`

const LottieContainer = styled.div`
  flex: 1;
  margin-top: 48px;
  align-self: center;
  padding: ${SPACING.S_2};
`;

const CardFooter = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 11px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.GRAY};
  text-align: center;
  margin-bottom: ${SPACING.S_1}px;
`;

const CardExperienceIntro = () => (
    <Card
        backgroundColor={COLOR_CONSTANTS.PEACH}
        shouldRotate={false}
    >
        <CardContainer>
        <CardTitleContainer>
            <CardTitle>
                Work Experience
            </CardTitle>
        </CardTitleContainer>
        <LottieContainer>
            <Lottie
                animationData={sittingWork}
                style={{ pointerEvents: 'none' }}
            />
        </LottieContainer>
        <CardFooter>
            est. 2019
        </CardFooter>
        </CardContainer>
    </Card>
);

export default CardExperienceIntro;

