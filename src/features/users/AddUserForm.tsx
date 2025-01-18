import { ChangeEvent, FormEvent, useState } from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { UserType } from '../../contexts/userContext/AppContextTypes';

function AddUserForm() {
  const { departments, statuses, countries } = useAppState();
  const [newUser, setNewUser] = useState<UserType>({
    id: Math.random().toString(),
    name: '',
    status: {
      name: '',
      value: '',
    },
    department: {
      name: '',
      value: '',
    },
    country: {
      name: '',
      value: '',
    },
  });

  function onChange(e: React.ChangeEvent<HTMLFormElement>) {
    setNewUser(prevData => ({ ...prevData, name: e.target.value }));
  }

  function test(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  // function handleChange(e: { e: FormEvent<HTMLFormElement> }) {
  //   console.log(e);
  // }

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
