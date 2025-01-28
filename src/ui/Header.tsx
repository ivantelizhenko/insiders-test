import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router';

import { Button } from './Button';
import { useAppState } from '../contexts/appContext/AppContext';

import { useLocation } from 'react-router';

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
  const [searchParams] = useSearchParams();
  const { users, setCurrentUser } = useAppState();

  const { pathname } = useLocation();
  const curPage = pathname.split('/').at(-1);

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
        $width="20rem"
        $selected={curPage === 'edit'}
      >
        Edit Users
      </Button>
      <Button
        onClick={() => handleNavigate('users')}
        $width="20rem"
        $selected={curPage === 'users'}
      >
        Users
      </Button>
    </StyledHeader>
  );
}

export default Header;
