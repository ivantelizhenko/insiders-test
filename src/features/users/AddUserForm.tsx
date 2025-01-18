import { ChangeEvent, FormEvent } from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';

function AddUserForm() {
  const { departments, statuses, countries } = useAppState();

  function onChange(e: FormEvent<HTMLFormElement>) {
    console.log(e.target);
  }

  function test(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  return (
    <Form title="User Information">
      <Input
        label="Full Name"
        defaultValue=""
        type="text"
        handleChange={onChange}
      />
      <Select label="Department" objs={departments} handlerSelect={test} />
      <Select label="Country" objs={countries} handlerSelect={test} />
      <Select label="Status" objs={statuses} handlerSelect={test} />
    </Form>
  );
}

export default AddUserForm;
