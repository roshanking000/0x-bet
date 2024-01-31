import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import { Header } from '../components/Header'

const BaseLayout = () => {
  return (
    <div className="w-full min-h-screen flex bg-[#090909]">
      <Sidebar />
      <main className='flex flex-col w-full'>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
