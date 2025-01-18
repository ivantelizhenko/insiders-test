import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from './ui/AppLayout';
import EditUsers from './features/editUser/EditUsers';
import PageNotFound from './ui/PageNotFound';
import Users from './features/users/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="app" />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="users" />} />

          <Route path="users" element={<Users />} />
          <Route path="edit/:userId" element={<EditUsers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
