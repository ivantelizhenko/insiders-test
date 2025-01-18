import styled from 'styled-components';
import { ReactNode } from 'react';

import Heading from './Heading';

const StyledForm = styled.div`
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

function Form({ title, children }: { title: string; children: ReactNode }) {
  return (
    <StyledForm>
      <Heading as="h3">{title}</Heading>
      <InputsBox>{children}</InputsBox>
    </StyledForm>
  );
}

export default Form;
