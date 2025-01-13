import styled from 'styled-components';

import { useAppState } from '../../contexts/userContext/AppContext';
import { useNavigate } from 'react-router';
import { Button } from '../buttons/Button';

const StyledHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #000;
  justify-content: center;
  align-items: center;
  padding: 2rem 8rem;
  gap: 2rem;
`;

function Header() {
  const navigate = useNavigate();
  const { currentUser, users } = useAppState();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <StyledHeader>
      <Button
        disabled={users.length === 0}
        onClick={() => handleNavigate(`edit/${currentUser.id}`)}
        width="20rem"
      >
        Edit Users
      </Button>
      <Button onClick={() => handleNavigate('users')} width="20rem">
        Users
      </Button>
    </StyledHeader>
  );
}

export default Header;
