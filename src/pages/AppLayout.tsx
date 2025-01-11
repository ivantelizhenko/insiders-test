import { Outlet } from 'react-router';
import styled from 'styled-components';

// type AppLayoutType = PropsWithChildren;

const StyledAppLayout = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
