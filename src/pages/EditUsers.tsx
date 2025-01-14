import styled from 'styled-components';
import Heading from '../components/Heading';

import Select from '../components/Select';
import { ChangeEvent } from 'react';
import Form from '../components/Form';
import Button from '../components/Button';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledEditUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const EditUsersInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

function EditUsers() {
  const { users } = useAppState();
  const usersTransform = users.map(user => ({
    name: user.name,
  }));

  function test(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  function onClick() {
    console.log('click');
  }
  return (
    <StyledEditUsers>
      <Heading as="h2">Edit user</Heading>
      <EditUsersInputsContainer>
        <Select label="Users" objs={usersTransform} handlerSelect={test} />
        <Form />
      </EditUsersInputsContainer>
      <ButtonsContainer>
        <Button width="10rem" onClick={onClick}>
          Undo
        </Button>
        <Button width="20rem" onClick={onClick}>
          Save
        </Button>
      </ButtonsContainer>
    </StyledEditUsers>
  );
}

export default EditUsers;
