import styled from 'styled-components';
import UserListItem from './UserListItem';
import { useAppState } from '../../../contexts/userContext/AppContext';

const StyledUsersLists = styled.ul`
  padding: 2.8rem 3.6rem;
`;

function UsersLists() {
  const { users } = useAppState();

  return (
    <StyledUsersLists>
      {users.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </StyledUsersLists>
  );
}

export default UsersLists;
