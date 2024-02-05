import { Outlet } from 'react-router-dom'

import { SidebarProvider } from "../context/SidebarContext";
import SidebarComponent from '../components/Sidebar'
import { Header } from '../components/Header'

const BaseLayout = () => {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex flex-col bg-[#090909]">
        <Header />
        <section className='flex w-full pt-[100px]'>
          <SidebarComponent />
          <main className="sm:ml-64 w-full px-2">
            <Outlet />
          </main>
        </section>
      </div>
    </SidebarProvider>
  )
}

export default BaseLayout
