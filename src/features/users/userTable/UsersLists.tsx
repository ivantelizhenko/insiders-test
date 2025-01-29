import styled from 'styled-components';
import UserListItem from './UserListItem';
import { useAppState } from '../../../contexts/appContext/AppContext';
import Message from '../../../ui/Message';
import { useFilters } from '../../../contexts/filtersContext/FiltersContext';
import { useEffect, useState } from 'react';

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
  const { departmentFilters, countryFilters, statusFilters } = useFilters();
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    setFilteredUsers(
      departmentFilters.length > 0
        ? users
            .filter(user => departmentFilters.includes(user.department.value))
            .toSorted((a, b) =>
              a.department.value.localeCompare(b.department.value)
            )
        : users
    );
    setFilteredUsers(prev =>
      statusFilters.length > 0
        ? prev.filter(user => statusFilters.includes(user.status.value))
        : prev
    );
    setFilteredUsers(prev =>
      countryFilters.length > 0
        ? prev.filter(user => countryFilters.includes(user.country.value))
        : prev
    );
    if (
      departmentFilters.length &&
      countryFilters.length &&
      statusFilters.length
    )
      setFilteredUsers(users);
  }, [users, departmentFilters, countryFilters, statusFilters]);

  if (users.length === 0)
    return (
      <MessaageContainer>
        <Message>Oops! You should add user 😉</Message>
      </MessaageContainer>
    );

  if (filteredUsers.length === 0)
    return (
      <MessaageContainer>
        <Message>Oops! You don't have users of this category. 😉</Message>
      </MessaageContainer>
    );

  return (
    <StyledUsersLists>
      {filteredUsers.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </StyledUsersLists>
  );
}

export default UsersLists;
