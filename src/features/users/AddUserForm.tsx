import { FormEvent, useId } from 'react';
import { useSearchParams } from 'react-router';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';
import { useModal } from '../../contexts/modalContext/ModalContext';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

import { useForm } from '../../hooks/useForm';

const ButtonBox = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: end;
  grid-column: 1/-1;
`;

function AddUserForm() {
  const { departments, statuses, countries, addUser } = useAppState();
  const { closeModal } = useModal();
  const [newUser, setNewUser] = useForm<Partial<UserType>>({
    id: useId() + Math.random().toString(),
  });
  const [searchParams, setSearchParams] = useSearchParams();

  function handleDeleteIdFromLink() {
    searchParams.delete('id');
    setSearchParams(searchParams);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addUser(newUser as UserType);
    closeModal();
    handleDeleteIdFromLink();
  }

  function handleCloseModal() {
    closeModal();
    handleDeleteIdFromLink();
  }

  return (
    <Form type="user/add" handleSubmit={handleSubmit}>
      <Heading as="h2">Add User</Heading>
      <>
        <Input
          label="Full Name"
          name="name"
          type="text"
          required={true}
          handleChange={setNewUser}
        />
        <Select
          label="Department"
          name="department"
          objs={departments}
          required={true}
          handlerSelect={setNewUser}
        />
        <Select
          label="Country"
          name="country"
          objs={countries}
          required={true}
          handlerSelect={setNewUser}
        />
        <Select
          label="Status"
          name="status"
          objs={statuses}
          required={true}
          handlerSelect={setNewUser}
        />
      </>
      <ButtonBox>
        <Button $type="button-10rem" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button $type="button-20rem">Add User</Button>
      </ButtonBox>
    </Form>
  );
}

export default AddUserForm;
