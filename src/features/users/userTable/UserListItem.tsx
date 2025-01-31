import styled from 'styled-components';
import { useSearchParams } from 'react-router';
import { useCallback } from 'react';

import { UserType } from '../../../contexts/appContext/AppContextTypes';
import { useModal } from '../../../contexts/modalContext/ModalContext';

import { TrashSvg } from '../../../ui/Svgs';
import Button from '../../../ui/Button';

const StyledUserListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20rem 1fr 20rem 10rem 2.4rem;

  align-items: center;

  & p {
    font-size: 1.4rem;
    font-weight: 300;
  }

  & p:first-child {
    font-weight: 400;
  }

  & button {
    border: none;
  }
`;

function UserListItem({ user }: { user: UserType }) {
  const { name, department, country, status, id } = user;
  const { setStatusModal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();

  const showAddUserModal = useCallback(() => {
    setStatusModal('confirmation');
    searchParams.set('id', id);
    setSearchParams(searchParams);
  }, [id, setSearchParams, searchParams, setStatusModal]);

  return (
    <StyledUserListItem>
      <p>{name}</p>
      <p>{department.name}</p>
      <p>{country.name}</p>
      <p>{status.name}</p>
      <Button
        $width="5rem"
        $padding="1.4rem"
        $height="100%"
        onClick={showAddUserModal}
      >
        <TrashSvg />
      </Button>
    </StyledUserListItem>
  );
}

export default UserListItem;
