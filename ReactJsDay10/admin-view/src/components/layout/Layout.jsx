import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Navigation from '../navigation/navigation'
import { Outlet } from 'react-router-dom' 

function Layout() {
  return (
    <>
        <Sidebar />
        <div className="wrapper-container">
            <Navigation />
            {/* <!-- Main content --> */}
            <section className="content">
                <Outlet />  //Hien thi noi dung linh dong
            </section>
        </div>
    </>
  )
}

export default Layout