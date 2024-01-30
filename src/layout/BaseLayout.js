import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

const BaseLayout = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#090909] font-['Enfonix']">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
