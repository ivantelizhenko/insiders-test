import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type HeadingProps = PropsWithChildren<{ as: string }>;

const Heading = styled.h2<HeadingProps>`
  display: flex;
  align-items: center;
  line-height: 3.2rem;
  font-weight: 400;

  ${props =>
    props.as === 'h1' &&
    css`
      text-transform: uppercase;
      font-size: 3.6rem;
      letter-spacing: 0.6rem;
    `}

  ${props =>
    props.as === 'h2' &&
    css`
      text-transform: uppercase;
      font-size: 2.4rem;
      letter-spacing: 0.6rem;
      justify-content: center;
    `}

  ${props =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      justify-content: start;
    `}

  ${props =>
    props.as === 'h5' &&
    css`
      font-size: 1.4rem;
      justify-content: start;
      line-height: 2rem;
      font-weight: 700;
    `}
`;

export default Heading;
