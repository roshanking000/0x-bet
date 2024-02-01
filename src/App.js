import { Route, Routes, Navigate } from 'react-router-dom'

import BaseLayout from "./layout/BaseLayout";
import DashboardPage from './pages/dashboard';
import LaunchpadPage from './pages/launchpad';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/launchpad' element={<LaunchpadPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
