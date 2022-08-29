import { Header } from '@/components/organisms/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/bosons/ToastContainer'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default DefaultLayout
