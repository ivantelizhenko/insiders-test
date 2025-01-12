import styled from 'styled-components';
import { ChangeEvent, FormEvent } from 'react';
import { useAppState } from '../../contexts/userContext/AppContext';
import Heading from '../headings/Heading';
import Input from './Input';
import Select from './Select';

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

function Form() {
  const { departments, statuses, countries } = useAppState();
  function onChange(e: FormEvent<HTMLFormElement>) {
    console.log(e.target);
  }

  function test(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  return (
    <StyledForm>
      <Heading as="h3">User Information</Heading>
      <InputsBox>
        <Input
          label="Full Name"
          defaultValue="Ivan Telizhenko"
          type="text"
          handleChange={onChange}
        />
        <Select label="Department" objs={departments} handlerSelect={test} />
        <Select label="Country" objs={countries} handlerSelect={test} />
        <Select label="Status" objs={statuses} handlerSelect={test} />
      </InputsBox>
    </StyledForm>
  );
}

export default Form;
