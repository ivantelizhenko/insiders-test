import styled from 'styled-components';

import Message from '../components/helpers/Message';

import { useAppState } from '../contexts/userContext/AppContext';
import FilterBox from '../components/filters/FilterBox';
import Heading from '../components/headings/Heading';
import FiltersBox from '../components/filters/Filtersbox';
import { Button } from '../components/buttons/Button';
import Table from '../components/table/Table';

const StyledUsers = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(3, 1fr);

  .styledUsers-heading {
    align-self: center;
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
    padding-left: auto;
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
        <Button width="5rem" padding="1.4rem" height="100%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </div>
      <div className="styledUsers-button">
        <Button width="15rem" padding="1.4rem" height="100%">
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
