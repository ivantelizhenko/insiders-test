import styled from 'styled-components';

import Heading from '../components/Heading';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const StyledPageNotFound = styled.div`
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <Button $type="button-20rem" onClick={() => navigate('/app/users')}>
        Go to Users page
      </Button>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
