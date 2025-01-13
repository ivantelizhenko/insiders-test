import styled from 'styled-components';

import Message from '../components/helpers/Message';

import { useAppState } from '../contexts/userContext/AppContext';
import FilterBox from '../components/filters/FilterBox';
import Heading from '../components/headings/Heading';
import FiltersBox from '../components/filters/Filtersbox';
import { Button } from '../components/buttons/Button';
import Table from '../components/table/Table';
import { TrashSvg } from '../components/helpers/Svgs';

const StyledUsers = styled.div`
  display: grid;
  grid-template-rows: repeat(3, fit-content);
  grid-template-columns: repeat(3, 1fr);

  .styledUsers-heading {
    grid-column: 1/-1;
  }
  .styledUsers-message {
    grid-column: 1/-1;
  }

  .styledUsers-buttonIcon {
    height: min-content;
    margin-left: 1.6rem;
  }

  .styledUsers-button {
    height: min-content;
    margin-left: auto;
  }

  .styledUsers-table {
    margin-top: 4rem;
    grid-column: 1/-1;
  }
`;

function Users() {
  const { departments, statuses, countries } = useAppState();
  // function onClick() {
  //   console.log('click');
  // }

  return (
    <StyledUsers>
      <div className="styledUsers-heading">
        <Heading as="h2">Users</Heading>
      </div>
      <div className="styledUsers-message">
        <Message>
          Please add at least 3 departmetns to be able to proceed next steps.
        </Message>
      </div>
      <div className="styledUsers-filterBox">
        <FiltersBox>
          <FilterBox data={departments} name="department" />
          <FilterBox data={countries} name="country" />
          <FilterBox data={statuses} name="status" />
        </FiltersBox>
      </div>
      <div className="styledUsers-buttonIcon">
        <Button width="5rem" padding="1.4rem">
          <TrashSvg />
        </Button>
      </div>
      <div className="styledUsers-button">
        <Button width="15rem" padding="1.4rem">
          Add User
        </Button>
      </div>
      <div className="styledUsers-table">
        <Table />
      </div>
    </StyledUsers>
  );
}

export default Users;
