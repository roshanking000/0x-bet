import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BaseLayout from "./layout/BaseLayout";
import DashboardPage from './pages/dashboard';
import LaunchpadPage from './pages/launchpad';
import Detail from './pages/detail';

function App() {
  return (
    <>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/launchpad' element={<LaunchpadPage />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
}

export default App;
