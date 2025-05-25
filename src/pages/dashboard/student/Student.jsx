import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style.css"

const Student = () => {
  return (
    <div>
        <h2>Student</h2>
        <div className='flex gap-8 py-4'>
          <NavLink to={""} end={true} className={"student-bars"}>Active</NavLink>
          <NavLink to={"graduated-student"} className={"student-bars"}>Graduated</NavLink>
          <NavLink to={"inactive"} className={"student-bars"}>Inactive</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Student