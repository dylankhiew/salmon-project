import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { getRandomDegrees } from '../utils/appUtils';
import { SPACING } from '../constants/spacingConstants';
import { CARD_STACK_CONFIG } from '../constants/appConstants';

const CardContainer = styled.div`
  height: 400px;
  width: 300px;
  position: relative;
  border-radius: 16px;
  padding: ${SPACING.S_2}px;
  border: 0.2px solid rgba(0,0,0,0.2);
`;

interface CardOwnProps {
  shouldRotate?: boolean;
  backgroundColor?: string;
}

type CardProps = CardOwnProps;

const Card = ({
  shouldRotate = true,
  backgroundColor,
  children,
}: PropsWithChildren<CardProps>): JSX.Element => {
  const randomDegree = getRandomDegrees(CARD_STACK_CONFIG.MAX_TILT_DEGREES);
  const transform = shouldRotate ? `rotate(${randomDegree}deg)` : `rotate(0deg)`;

  return (
    <CardContainer style={{ transform, backgroundColor }}>
      {children}
    </CardContainer>
  )
}

export default Card;