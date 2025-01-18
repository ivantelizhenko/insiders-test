import styled from 'styled-components';

import { Link } from 'react-router';
import Heading from './Heading';

const StyledPageNotFound = styled.div`
  padding: 6rem 8rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <Link to="/app/users">Go to Users page</Link>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
