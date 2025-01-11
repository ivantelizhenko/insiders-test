import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type HeadingProps = PropsWithChildren;

const StyledHeading = styled.h2`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

function Heading({ children }: HeadingProps) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
