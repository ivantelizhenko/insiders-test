import styled from 'styled-components';
import Heading from '../components/Heading';
import Message from '../components/Message';
import FilterBox from '../components/FilterBox';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledUsers = styled.div``;

const FiltersBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;

function Users() {
  const { departments, statuses, countries } = useAppState();
  // function onClick() {
  //   console.log('click');
  // }

  return (
    <StyledUsers>
      <Heading as="h2">Edit user</Heading>
      <Message>
        Please add at least 3 departmetns to be able to proceed next steps.
      </Message>
      <FiltersBox>
        <FilterBox data={departments} name="department" />
        <FilterBox data={countries} name="country" />
        <FilterBox data={statuses} name="status" />
      </FiltersBox>
    </StyledUsers>
  );
}

export default Users;
