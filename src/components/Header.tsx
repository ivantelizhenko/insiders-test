import styled from 'styled-components';
import Button from './Button';

const StyledHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #000;
  justify-content: center;
  align-items: center;
  padding: 2rem 8rem;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Button to="edit">Edit Users</Button>
      <Button to="users">Users</Button>
    </StyledHeader>
  );
}

export default Header;
