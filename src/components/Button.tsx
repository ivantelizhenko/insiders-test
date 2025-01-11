import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
  width: string;
} & PropsWithChildren;

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid #c4c4c4;
  background-color: #fff;
  color: #000;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  padding: 1rem;

  display: flex;

  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  height: 100%;

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: #c4c4c4;
  }
`;

function Button({ onClick, children, width }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} width={width}>
      {children}
    </StyledButton>
  );
}

export default Button;
