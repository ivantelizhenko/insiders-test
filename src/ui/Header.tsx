import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router';

import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';

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
  const { users, setCurrentUser } = useAppState();

  const [searchParams] = useSearchParams();

  function handleNavigate(path: string) {
    navigate(path);
    searchParams.delete('id');
    setCurrentUser('');
  }

  return (
    <StyledHeader>
      <Button
        disabled={users.length === 0}
        onClick={() => handleNavigate(`edit`)}
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
