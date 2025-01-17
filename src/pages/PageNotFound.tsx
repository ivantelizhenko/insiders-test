import styled from 'styled-components';
import Heading from '../components/headings/Heading';

import { Link } from 'react-router';

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
