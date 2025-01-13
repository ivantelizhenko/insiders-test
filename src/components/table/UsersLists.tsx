import styled from 'styled-components';
import UserListItem from './UserListItem';

const StyledUsersLists = styled.div`
  padding: 2.8rem 3.6rem;
  height: 35rem;
  overflow-y: scroll;
`;

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function UsersLists() {
  return (
    <StyledUsersLists>
      <ul>
        {testArr.map(el => (
          <UserListItem key={el} />
        ))}
      </ul>
    </StyledUsersLists>
  );
}

export default UsersLists;
