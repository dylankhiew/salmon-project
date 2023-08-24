import { COLOR_CONSTANTS, FONT_CONSTANTS } from '../../constants/appConstants';
import Card from '../Card';
import salmon from '../../assets/salmon-icon.png';
import { styled } from 'styled-components';
import { SPACING } from '../../constants/spacingConstants';

const Image = styled.img`
  width: 150px;
  height: 150px;
  opacity: 0.8;
`;

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

const CardSubtitle = styled.div`
  font-family: ${FONT_CONSTANTS.PLUS_JAKARTA_SANS};
  font-size: 14px;
  font-weight: 300;
  color: ${COLOR_CONSTANTS.GRAY};
  text-align: center;
`
const CardImageContainer = styled.div`
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

const CardCover = () => {
  return (
    <Card backgroundColor={COLOR_CONSTANTS.LIGHT_SALMON} shouldRotate={false}>
        <CardContainer>
          <CardTitleContainer>
            <CardTitle>
              Welcome
            </CardTitle>
            <CardSubtitle>
              to the <b>Salmon</b> Project
            </CardSubtitle>
          </CardTitleContainer>
          <CardImageContainer>
              <Image src={salmon} alt="sushi" />
          </CardImageContainer>
          <CardFooter>
            by Dylan Khiew
          </CardFooter>
        </CardContainer>
    </Card>
  )
};

export default CardCover;

