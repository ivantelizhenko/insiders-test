import styled from 'styled-components';

type ButtonProps = {
  width: string;
  padding?: string;
  height?: string;
  selected?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => props.height || '100%'};
  width: ${props => props.width};
  padding: ${props => props.padding || '1rem'};
  cursor: pointer;

  color: #000;
  background-color: ${props => (props.selected ? '#c4c4c4' : '#fff')};

  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: #c4c4c4;
  }

  &:disabled {
    color: #c4c4c4;
  }
`;
