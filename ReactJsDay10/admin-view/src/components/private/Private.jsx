import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
    const {auth, isAuthenticated} = useSelector((state) => state.auth)
    if (!isAuthenticated || !auth) {
        return <Navigate to={"admin/login"} />
    }

    // TODO: Kiem tra role
  
  return (
    <Outlet />
  )
}

export default Private