import styled from 'styled-components';
import { ChangeEvent, useEffect } from 'react';

import { useAppState } from '../../contexts/appContext/AppContext';

import EditUserForm from './EditUserForm';
import Heading from '../../components/Heading';
import Select from '../../components/Select';
import Message from '../../components/Message';

const StyledEditUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const EditUsersInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  .edit-user__select {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
  }
`;

function EditUsers() {
  const { users, setCurrentUser, currentUser } = useAppState();

  useEffect(() => {
    setCurrentUser('');
  }, [setCurrentUser]);

  function handleSelectUser(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentUser(e.target.value);
  }

  return (
    <StyledEditUsers>
      <Heading as="h2">Edit user</Heading>
      {users.length === 0 ? (
        <Message textSize="2rem">
          Hey! You must add at least one user 😉
        </Message>
      ) : (
        <EditUsersInputsContainer>
          <span className="edit-user__select">
            <Select
              label="User"
              name="user"
              objs={users}
              handlerSelect={handleSelectUser}
            />
          </span>
          {currentUser?.name && <EditUserForm />}
        </EditUsersInputsContainer>
      )}
    </StyledEditUsers>
  );
}

export default EditUsers;
