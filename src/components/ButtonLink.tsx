import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{
  to: string;
}>;

const StyledButtonLink = styled.div`
  border: 1px solid #c4c4c4;

  a:link,
  a:visited {
    color: #000;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;

    padding: 1rem;

    display: flex;
    width: 20rem;
    align-items: center;
    justify-content: center;
    height: 100%;

    transition: all 0.2s;
  }
  a:hover,
  a:active,
  .active {
    background-color: #c4c4c4;
  }
`;

function ButtonLink({ to, children }: ButtonProps) {
  return (
    <StyledButtonLink>
      <NavLink to={to}>{children}</NavLink>
    </StyledButtonLink>
  );
}

export default ButtonLink;
