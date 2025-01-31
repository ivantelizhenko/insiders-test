import styled from 'styled-components';

import { useNavigate, useLocation, useSearchParams } from 'react-router';

import Button from '../components/Button';

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

  const { pathname } = useLocation();
  const curPage = pathname.split('/').at(-1);

  function handleNavigate(path: string) {
    navigate(path);
    searchParams.delete('id');
  }

  return (
    <StyledHeader>
      <Button
        onClick={() => handleNavigate(`edit`)}
        $type="button-20rem"
        $selected={curPage === 'edit'}
      >
        Edit Users
      </Button>
      <Button
        onClick={() => handleNavigate('users')}
        $type="button-20rem"
        $selected={curPage === 'users'}
      >
        Users
      </Button>
    </StyledHeader>
  );
}

export default Header;
