import {
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

import { useAppState } from '../../contexts/userContext/AppContext';

import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Form from '../../ui/Form';
import { Button } from '../../ui/Button';
import styled from 'styled-components';
import { UserType } from '../../contexts/userContext/AppContextTypes';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  grid-column: 1/-1;
`;

function EditUserForm() {
  const { departments, statuses, countries, currentUser, updateUser } =
    useAppState();
  const [updatedUser, setUpdatedUser] = useState(currentUser);

  useEffect(() => {
    setUpdatedUser(currentUser);
  }, [currentUser]);

  function changeName(e: ChangeEvent<HTMLInputElement>) {
    setUpdatedUser(prev => ({ ...prev, name: e.target.value }));
  }

  function setFromSelect(e: ChangeEvent<HTMLSelectElement>) {
    const curOptionValue = e.target.value;
    const curSelectName = e.target.dataset.selection_name?.toLowerCase();
    const curSelectObjs = JSON.parse(e.target.dataset.selection_objs!);
    const curOption = curSelectObjs.find(
      (el: { name: string; value: string; id: string }) =>
        el.value === curOptionValue
    );
    setUpdatedUser(prevData => ({
      ...prevData,
      [`${curSelectName}`]: { name: curOption.name, value: curOption.value },
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateUser(currentUser.id!, updatedUser as UserType);
  }

  function handleDecline(e: SyntheticEvent) {
    e.preventDefault();
    setUpdatedUser(currentUser);
  }
  return (
    <Form title="User Information" handleSubmit={handleSubmit}>
      <Input
        required={true}
        label="Full Name"
        defaultValue={updatedUser.name}
        type="text"
        handleChange={changeName}
      />
      <Select
        required={true}
        label="Department"
        objs={departments}
        handlerSelect={setFromSelect}
        defaultValue={updatedUser?.department?.value}
      />
      <Select
        required={true}
        label="Country"
        objs={countries}
        handlerSelect={setFromSelect}
        defaultValue={updatedUser?.country?.value}
      />
      <Select
        label="Status"
        required={true}
        objs={statuses}
        handlerSelect={setFromSelect}
        defaultValue={updatedUser?.status?.value}
      />

      <ButtonsContainer>
        <Button
          width="20rem"
          disabled={JSON.stringify(updatedUser) === JSON.stringify(currentUser)}
        >
          Save
        </Button>
        {JSON.stringify(updatedUser) !== JSON.stringify(currentUser) && (
          <Button width="10rem" onClick={handleDecline}>
            Undo
          </Button>
        )}
      </ButtonsContainer>
    </Form>
  );
}

export default EditUserForm;
