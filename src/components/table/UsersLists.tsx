import styled from 'styled-components';
import UserListItem from './UserListItem';

const StyledUsersLists = styled.div`
  padding: 2.8rem 3.6rem;
  height: 35rem;
  overflow-y: scroll;
`;

const testArr = [1, 2, 3, 4, 1, 2, 3, 4, 2, 3, 4, 2, 3, 4];

function UsersLists() {
  return (
    <StyledUsersLists>
      <ul>
        {testArr.map(() => (
          <UserListItem />
        ))}
      </ul>
    </StyledUsersLists>
  );
}

export default UsersLists;
