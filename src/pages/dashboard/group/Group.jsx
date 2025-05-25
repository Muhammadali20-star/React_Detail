import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Group = () => {
  return (
    <div>
        <div className='flex gap-4 mb-4'>
        <NavLink to={""}>List</NavLink>
        <NavLink to={"group-attendance"}>Group Attendance </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Group