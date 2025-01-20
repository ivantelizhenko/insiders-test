import styled from 'styled-components';
import { createPortal } from 'react-dom';

import AddUserModal from './AddUserModal';

import UsersTable from './userTable/UsersTable';
import { useAppState } from '../../contexts/userContext/AppContext';
import Heading from '../../ui/Heading';
import Message from '../../ui/Message';
import FiltersBox from '../../ui/Filtersbox';
import FilterBox from '../../ui/FilterBox';
import { Button } from '../../ui/Button';
import { TrashSvg } from '../../ui/Svgs';
import ConfirmModal from '../../ui/ConfirmModal';

const StyledUsers = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, 1fr);

  #styledUsers-heading {
    grid-column: 1/-1;
  }
  #styledUsers-message {
    grid-column: 1/-1;
  }

  #styledUsers-buttonIcon {
    height: min-content;
    margin-left: 1.6rem;
  }

  #styledUsers-button {
    height: min-content;
    margin-left: auto;
  }

  #styledUsers-table {
    margin-top: 4rem;
    grid-column: 1/-1;
  }
`;

function Users() {
  const {
    departments,
    statuses,
    countries,
    showModalStatus,
    setStatusModal,
    currentUser,
    closeModal,
    deleteUser,
  } = useAppState();

  function handleDeleteUser() {
    deleteUser(currentUser.id!);
    closeModal();
  }

  function showAddUserModal() {
    setStatusModal('addUser');
  }

  return (
    <StyledUsers>
      <div id="styledUsers-heading">
        <Heading as="h2">Users</Heading>
      </div>
      <div id="styledUsers-message">
        <Message>
          Please add at least 3 departmetns to be able to proceed next steps.
        </Message>
      </div>
      <div id="styledUsers-filterBox">
        <FiltersBox>
          <FilterBox data={departments} name="department" />
          <FilterBox data={countries} name="country" />
          <FilterBox data={statuses} name="status" />
        </FiltersBox>
      </div>
      <div id="styledUsers-buttonIcon">
        <Button width="5rem" padding="1.4rem">
          <TrashSvg />
        </Button>
      </div>
      <div id="styledUsers-button">
        <Button width="15rem" padding="1.4rem" onClick={showAddUserModal}>
          Add User
        </Button>
      </div>
      <div id="styledUsers-table">
        <UsersTable />
      </div>
      {showModalStatus === 'addUser' &&
        createPortal(<AddUserModal />, document.body)}
      {showModalStatus === 'confirmation' &&
        createPortal(
          <ConfirmModal handleAccept={handleDeleteUser} />,
          document.body
        )}
    </StyledUsers>
  );
}

export default Users;
