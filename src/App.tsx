import Users from './pages/Users';
import EditUsers from './pages/EditUsers';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="app" />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="users" />} />

          <Route path="users" element={<Users />} />
          <Route path="edit" element={<EditUsers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
