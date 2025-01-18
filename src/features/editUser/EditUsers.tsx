import styled from 'styled-components';
import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppState } from '../../contexts/userContext/AppContext';

import EditUserForm from './EditUserForm';
import Heading from '../../ui/Heading';
import Select from '../../ui/Select';
import { Button } from '../../ui/Button';
import { useParams } from 'react-router';

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
  const { users, currentUser, setCurrentUser } = useAppState();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    setCurrentUser(userId);
  }, [userId, setCurrentUser]);

  const usersTransform = users.map(user => ({
    id: user.id,
    name: user.name,
  }));

  function test(e: ChangeEvent<HTMLSelectElement>) {
    navigate(`/app/edit/${e.target.value}`);
  }

  function onClick() {
    console.log('click');
  }

  return (
    <StyledEditUsers>
      <Heading as="h2">Edit user</Heading>

      <EditUsersInputsContainer>
        <Select
          label="Users"
          objs={usersTransform}
          handlerSelect={test}
          defaultValue={currentUser?.id}
        />
        <EditUserForm />
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
