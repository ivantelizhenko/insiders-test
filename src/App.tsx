import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import AppLayout from './features/AppLayout';
import EditUsers from './features/editUser/EditUsers';

import Users from './features/users/Users';
import { FiltersProvider } from './contexts/filtersContext/FiltersContext';
import PageNotFound from './features/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="app" />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="users" />} />

          <Route
            path="users"
            element={
              <FiltersProvider>
                <Users />
              </FiltersProvider>
            }
          />
          <Route path="edit" element={<EditUsers />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
