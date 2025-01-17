import styled from 'styled-components';
import UserListItem from './UserListItem';

const StyledUsersLists = styled.ul`
  padding: 2.8rem 3.6rem;
`;

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const testArr = [];

function UsersLists() {
  return (
    <StyledUsersLists>
      {testArr.map(el => (
        <UserListItem key={el} />
      ))}
    </StyledUsersLists>
  );
}

export default UsersLists;
