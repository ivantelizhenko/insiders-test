import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useSearchParams } from 'react-router';

import { useAppState } from '../../contexts/appContext/AppContext';
import { useModal } from '../../contexts/modalContext/ModalContext';
import { useFilters } from '../../contexts/filtersContext/FiltersContext';

import Heading from '../../ui/Heading';
import Message from '../../ui/Message';
import FiltersBox from '../../ui/Filtersbox';
import { Button } from '../../ui/Button';
import { TrashSvg } from '../../ui/Svgs';
import ConfirmModal from '../../ui/ConfirmModal';
import AddUserModal from './AddUserModal';
import UsersTable from './userTable/UsersTable';

const StyledUsers = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, 1fr);

  #styledUsers-heading {
    grid-column: 1/-1;
  }
  #styledUsers-message {
    grid-column: 1/-1;
    height: 5rem;
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
  const [searchParams] = useSearchParams();
  const { deleteUser } = useAppState();
  const { modalStatus, setStatusModal, closeModal } = useModal();
  const { departmentFilters, deleteFilterValues, toggleAllowAllFilters } =
    useFilters();

  function handleDeleteUser() {
    const userId = searchParams.get('id');
    if (userId) {
      deleteUser(userId);
      closeModal();
    } else {
      console.error('User ID not found');
    }
  }

  function showAddUserModal() {
    setStatusModal('addUser');
  }

  function handleClearFilters() {
    deleteFilterValues('status');
    deleteFilterValues('department');
    deleteFilterValues('country');
    toggleAllowAllFilters(false);
  }

  return (
    <StyledUsers>
      <div id="styledUsers-heading">
        <Heading as="h2">Users</Heading>
      </div>
      <div id="styledUsers-message">
        {departmentFilters.length < 3 && (
          <Message>
            Please add at least 3 departmetns to be able to proceed next steps.
          </Message>
        )}
      </div>
      <div id="styledUsers-filterBox">
        <FiltersBox />
      </div>
      <div id="styledUsers-buttonIcon">
        <Button $width="5rem" $padding="1.4rem" onClick={handleClearFilters}>
          <TrashSvg />
        </Button>
      </div>
      <div id="styledUsers-button">
        <Button $width="15rem" $padding="1.4rem" onClick={showAddUserModal}>
          Add User
        </Button>
      </div>
      <div id="styledUsers-table">
        <UsersTable />
      </div>
      {modalStatus === 'addUser' &&
        createPortal(<AddUserModal />, document.body)}
      {modalStatus === 'confirmation' &&
        createPortal(
          <ConfirmModal handleAccept={handleDeleteUser} />,
          document.body
        )}
    </StyledUsers>
  );
}

export default Users;
