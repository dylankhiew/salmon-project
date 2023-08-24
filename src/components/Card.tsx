import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { getRandomDegrees } from '../utils/appUtils';
import { SPACING } from '../constants/spacingConstants';

const CardContainer = styled.div`
  height: 400px;
  width: 300px;
  position: relative;
  border-radius: 16px;
  padding: ${SPACING.S_2}px;
`;

interface CardOwnProps {
  shouldRotate?: boolean;
  backgroundColor?: string;
}

type CardProps = CardOwnProps;

const Card = ({ shouldRotate = true, backgroundColor, children }: PropsWithChildren<CardProps>): JSX.Element => {
  const randomDegree = getRandomDegrees(8);
  const transform = shouldRotate ? `rotate(${randomDegree}deg)` : `rotate(0deg)`;

  return (
    <CardContainer style={{ transform, backgroundColor }}>
      {children}
    </CardContainer>
  )
}

export default Card;