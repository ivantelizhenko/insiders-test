import { Link } from 'react-router';
import styled from 'styled-components';

const StyledPageNotFound = styled.div``;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h1>Page not found</h1>
      <Link to="/app/users">Go to Users page</Link>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
