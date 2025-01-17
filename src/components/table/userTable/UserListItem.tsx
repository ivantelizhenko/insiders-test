import styled from 'styled-components';
import { Button } from '../../buttons/Button';
import { TrashSvg } from '../../helpers/Svgs';

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

function UserListItem() {
  return (
    <StyledUserListItem>
      <p>name</p>
      <p>department</p>
      <p>country</p>
      <p>status</p>
      <Button width="5rem" padding="1.4rem" height="100%">
        <TrashSvg />
      </Button>
    </StyledUserListItem>
  );
}

export default UserListItem;
