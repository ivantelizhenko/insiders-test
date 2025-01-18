import styled from 'styled-components';
import { Button } from '../../../ui/Button';
import { TrashSvg } from '../../../ui/Svgs';
import { UserType } from '../../../contexts/userContext/AppContextTypes';

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
  const { name, department, country, status } = user;

  return (
    <StyledUserListItem>
      <p>{name}</p>
      <p>{department.name}</p>
      <p>{country.name}</p>
      <p>{status.name}</p>
      <Button width="5rem" padding="1.4rem" height="100%">
        <TrashSvg />
      </Button>
    </StyledUserListItem>
  );
}

export default UserListItem;
