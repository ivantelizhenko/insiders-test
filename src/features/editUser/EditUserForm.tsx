import { ChangeEvent, FormEvent } from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Form from '../../ui/Form';

function EditUserForm() {
  const { departments, statuses, countries, currentUser } = useAppState();

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
        defaultValue={currentUser?.name}
        type="text"
        handleChange={onChange}
      />
      <Select
        label="Department"
        objs={departments}
        handlerSelect={test}
        defaultValue={currentUser?.department?.value}
      />
      <Select
        label="Country"
        objs={countries}
        handlerSelect={test}
        defaultValue={currentUser?.country?.value}
      />
      <Select
        label="Status"
        objs={statuses}
        handlerSelect={test}
        defaultValue={currentUser?.status?.value}
      />
    </Form>
  );
}

export default EditUserForm;
