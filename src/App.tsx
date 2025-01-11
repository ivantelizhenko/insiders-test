import Users from './pages/Users';
import EditUsers from './pages/EditUsers';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import { useAppState } from './contexts/userContext/AppContext';
import { usersData } from '../data/usersData';
import { countriesData } from '../data/countriesData';
import { departmentsData } from '../data/departmentsData';
import { statusesData } from '../data/statusesData';
import { useEffect } from 'react';

function App() {
  const { fetchUsers, fetchCountries, fetchDepartmentse, fetchStatuses } =
    useAppState();

  useEffect(() => {
    fetchUsers(usersData);
    fetchCountries(countriesData);
    fetchDepartmentse(departmentsData);
    fetchStatuses(statusesData);

    // !!
  }, []);

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
