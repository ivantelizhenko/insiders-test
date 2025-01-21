import styled from 'styled-components';
import { FormEvent, ReactNode } from 'react';

import Heading from './Heading';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const InputsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 8rem;
  column-gap: 2rem;
`;

type FormProps = {
  title: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
};

function Form({ title, children, handleSubmit }: FormProps) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading as="h3">{title}</Heading>
      <InputsBox>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
