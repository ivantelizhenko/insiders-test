import styled from 'styled-components';
import UserListItem from './UserListItem';
import { useAppState } from '../../../contexts/userContext/AppContext';
import Message from '../../../ui/Message';

const StyledUsersLists = styled.ul`
  padding: 2.8rem 3.6rem;
`;
const MessaageContainer = styled.div`
  padding: 2.8rem 3.6rem;
  display: flex;
  justify-content: center;
  p {
    font-size: 2.4rem;
  }
`;

function UsersLists() {
  const { users } = useAppState();

  if (users.length === 0)
    return (
      <MessaageContainer>
        <Message>Oops! You should add user. 😉</Message>
      </MessaageContainer>
    );

  return (
    <StyledUsersLists>
      {users.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </StyledUsersLists>
  );
}

export default UsersLists;
