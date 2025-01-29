import { FormEvent, useCallback, useEffect } from 'react';
import _ from 'lodash';

import { useAppState } from '../../contexts/appContext/AppContext';
import { UserType } from '../../contexts/appContext/AppContextTypes';

import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Form from '../../ui/Form';
import { Button } from '../../ui/Button';
import styled from 'styled-components';
import { useForm } from '../../hooks/useForm';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  grid-column: 1/-1;
`;

function EditUserForm() {
  const {
    departments,
    statuses,
    countries,
    currentUser,
    setCurrentUser,
    updateUser,
  } = useAppState();
  const [updatedUser, setUpdatedUser, setValue] =
    useForm<Partial<UserType>>(currentUser);

  useEffect(() => {
    setValue(currentUser);
  }, [currentUser, setValue]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      updateUser(currentUser.id!, updatedUser as UserType);
      setCurrentUser(updatedUser.id);
    },
    [currentUser.id, setCurrentUser, updateUser, updatedUser]
  );

  const handleDecline = useCallback(() => {
    setValue(currentUser);
  }, [setValue, currentUser]);
  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        type="text"
        label="Full Name"
        name="name"
        defaultValue={updatedUser.name}
        required={true}
        handleChange={setUpdatedUser}
      />
      <Select
        label="Department"
        name="department"
        objs={departments}
        defaultValue={updatedUser?.department?.value}
        required={true}
        handlerSelect={setUpdatedUser}
      />
      <Select
        label="Country"
        name="country"
        objs={countries}
        defaultValue={updatedUser?.country?.value}
        required={true}
        handlerSelect={setUpdatedUser}
      />
      <Select
        label="Status"
        name="status"
        objs={statuses}
        defaultValue={updatedUser?.status?.value}
        required={true}
        handlerSelect={setUpdatedUser}
      />

      <ButtonsContainer>
        <Button $width="20rem" disabled={_.isEqual(updatedUser, currentUser)}>
          Save
        </Button>
        {!_.isEqual(updatedUser, currentUser) && (
          <Button $width="10rem" onClick={handleDecline}>
            Undo
          </Button>
        )}
      </ButtonsContainer>
    </Form>
  );
}

export default EditUserForm;
