import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useAppState } from '../../contexts/appContext/AppContext';

import EditUserForm from './EditUserForm';
import Heading from '../../ui/Heading';
import Select from '../../ui/Select';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();

  if (users.length === 0) navigate('/app/users');

  const usersTransform = users.map(user => ({
    id: user.id,
    name: user.name,
  }));

  function handleSelectUser(e: ChangeEvent<HTMLSelectElement>) {
    setCurrentUser(e.target.value);
  }

  return (
    <StyledEditUsers>
      <Heading as="h2">Edit user</Heading>

      <EditUsersInputsContainer>
        <span className="edit-user__select">
          <Select
            label="User"
            name="user"
            objs={usersTransform}
            handlerSelect={handleSelectUser}
            defaultValue={currentUser?.id}
          />
        </span>
        {currentUser?.name && <EditUserForm />}
      </EditUsersInputsContainer>
    </StyledEditUsers>
  );
}

export default EditUsers;
