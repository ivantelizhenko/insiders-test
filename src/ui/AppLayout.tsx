import styled from 'styled-components';
import { Outlet } from 'react-router';

import Header from './Header';
import { AppProvider } from '../contexts/appContext/AppContext';
import { ModalProvider } from '../contexts/modalContext/ModalContext';

const StyledAppLayout = styled.div`
  font-family: 'Rubik', serif;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  margin: 8rem 10rem;
  padding: 6rem 8rem;
  border: 1px #000 solid;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <AppProvider>
          <ModalProvider>
            <Outlet />
          </ModalProvider>
        </AppProvider>
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
