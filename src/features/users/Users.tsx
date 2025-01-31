import { memo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router';
import styled from 'styled-components';

import { useAppState } from '../../contexts/appContext/AppContext';
import { useModal } from '../../contexts/modalContext/ModalContext';
import { useFilters } from '../../contexts/filtersContext/FiltersContext';

import Heading from '../../components/Heading';
import Message from '../../components/Message';
import FiltersBox from '../filters/Filtersbox';
import Button from '../../components/Button';

import ConfirmModal from '../../components/ConfirmModal';
import UsersTable from './userTable/UsersTable';
import Modal from '../../components/Modal';
import AddUserForm from './AddUserForm';
import TrashSvg from '../../components/TrashSvg';

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

const UsersTableMemo = memo(UsersTable);

function Users() {
  const [searchParams] = useSearchParams();
  const { deleteUser } = useAppState();
  const { modalStatus, setStatusModal, closeModal } = useModal();
  const { departmentFilters, deleteFilterValues, toggleAllowAllFilters } =
    useFilters();

  const handleDeleteUser = useCallback(() => {
    const userId = searchParams.get('id');
    if (userId) {
      deleteUser(userId);
      closeModal();
    } else {
      console.error('User ID not found');
    }
  }, [closeModal, deleteUser, searchParams]);

  const showAddUserModal = useCallback(() => {
    setStatusModal('addUser');
  }, [setStatusModal]);

  const handleClearFilters = useCallback(() => {
    deleteFilterValues('status');
    deleteFilterValues('department');
    deleteFilterValues('country');
    toggleAllowAllFilters(false);
  }, [deleteFilterValues, toggleAllowAllFilters]);

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
        <Button $type="button-5rem" onClick={handleClearFilters}>
          <TrashSvg />
        </Button>
      </div>
      <div id="styledUsers-button">
        <Button $type="button-15rem" onClick={showAddUserModal}>
          Add User
        </Button>
      </div>
      <div id="styledUsers-table">
        <UsersTableMemo />
      </div>
      {modalStatus === 'addUser' &&
        createPortal(
          <Modal>
            <AddUserForm />
          </Modal>,
          document.body
        )}
      {modalStatus === 'confirmation' &&
        createPortal(
          <ConfirmModal handleAccept={handleDeleteUser} />,
          document.body
        )}
    </StyledUsers>
  );
}

export default Users;
