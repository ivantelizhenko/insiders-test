import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { Button } from '../../ui/Button';

const ButtonBox = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: end;
  grid-column: 1/-1;
`;

function AddUserForm() {
  const { departments, statuses, countries, closeModal, addUser } =
    useAppState();
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

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.value;

    setNewUser(prevData => ({ ...prevData, name: inputName }));
  }

  function setFromSelect(e: ChangeEvent<HTMLSelectElement>) {
    const curOptionValue = e.target.value;
    const curSelectName = e.target.dataset.selection_name?.toLowerCase();
    const curSelectObjs = JSON.parse(e.target.dataset.selection_objs!);
    const curOption = curSelectObjs.find(
      (el: { name: string; value: string; id: string }) =>
        el.value === curOptionValue
    );
    setNewUser(prevData => ({
      ...prevData,
      [`${curSelectName}`]: { name: curOption.name, value: curOption.name },
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser);
    closeModal();
  }

  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        required={true}
        label="Full Name"
        type="text"
        handleChange={onChange}
      />
      <Select
        label="Department"
        objs={departments}
        handlerSelect={setFromSelect}
        required={true}
      />
      <Select
        label="Country"
        objs={countries}
        handlerSelect={setFromSelect}
        required={true}
      />
      <Select
        label="Status"
        objs={statuses}
        handlerSelect={setFromSelect}
        required={true}
      />
      <ButtonBox>
        <Button width="20rem">Add User</Button>
        <Button width="10rem" onClick={closeModal}>
          Undo
        </Button>
      </ButtonBox>
    </Form>
  );
}

export default AddUserForm;
