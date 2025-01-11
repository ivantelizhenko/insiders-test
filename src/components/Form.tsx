import styled from 'styled-components';
import { ChangeEvent, FormEvent } from 'react';

import Heading from './Heading';
import Input from './Input';

import { countriesData as countries } from '../../data/countriesData';
import { departmentsData as departments } from '../../data/departmentsData';
import { statusesData as statuses } from '../../data/statusesData';
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
