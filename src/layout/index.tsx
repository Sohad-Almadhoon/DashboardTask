// import Navbar from "@/components/PatientPage/Navbar.tsx";
import { Outlet } from 'react-router-dom'
import Navbar from '../components/PatientPage/NavBar'
import SideBar from '../components/PatientPage/SideBar'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <Box display="flex">
      <SideBar />
      <Box flex={1} width="100%" overflow="hidden">
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
