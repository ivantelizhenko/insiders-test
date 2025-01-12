import styled from 'styled-components';

type ButtonProps = { width: string };

export const Button = styled.button<ButtonProps>`
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${props => props.width};

  cursor: pointer;

  color: #000;
  background-color: #fff;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: #c4c4c4;
  }
`;
