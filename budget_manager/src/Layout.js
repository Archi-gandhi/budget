import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Services from './components/Services'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Services/>
    <Footer/>
      
    </>
  )
}

export default Layout
