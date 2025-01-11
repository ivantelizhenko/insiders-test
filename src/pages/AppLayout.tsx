import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from '../components/Header';

// type AppLayoutType = PropsWithChildren;

const StyledAppLayout = styled.div`
  font-family: 'Rubik', serif;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
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
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
