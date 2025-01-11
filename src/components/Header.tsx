import styled from 'styled-components';
import ButtonLink from './ButtonLink';

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
      <ButtonLink to="edit">Edit Users</ButtonLink>
      <ButtonLink to="users">Users</ButtonLink>
    </StyledHeader>
  );
}

export default Header;
