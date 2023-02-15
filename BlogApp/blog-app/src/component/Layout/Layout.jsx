import React from 'react'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
        <Header />
            <main className='main'>
                <Outlet />
                <ToastContainer />
            </main> 
        <Footer />
    </>
  )
}

export default Layout