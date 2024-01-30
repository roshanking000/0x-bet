import { Route, Routes, Navigate } from 'react-router-dom'

import BaseLayout from "./layout/BaseLayout";
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
