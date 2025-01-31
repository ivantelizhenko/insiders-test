import styled, { css } from 'styled-components';
import { FormEvent, ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  type: 'user/edit' | 'user/add';
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InputsBox = styled.div<{ $type: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  & h1,
  h2,
  h3,
  h3,
  h5,
  h6 {
    grid-column: 1/-1;
  }

  ${props =>
    props.$type === 'user/edit' &&
    css`
      gap: 4rem;
    `}
  ${props =>
    props.$type === 'user/add' &&
    css`
      gap: 6rem;
    `}
`;

function Form({ children, handleSubmit, type }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputsBox $type={type}>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
