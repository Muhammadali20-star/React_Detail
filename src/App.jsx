import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import NotFound from './pages/not-found/NotFound'
import ProductDetail from './pages/product-detail/ProductDetail'
import Users from './pages/Users/Users'
import Recipe from './pages/recipe/Recipe'
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import Posts from './pages/posts/Posts'
import UsersDateil from './pages/users-detail/UsersDateil'
import PostDetail from './pages/post-detail/PostDetail'
import Dashboard from './pages/dashboard/Dashboard'
import Group from './pages/dashboard/group/Group'
import Student from './pages/dashboard/student/Student'
import Profile from './pages/dashboard/profile/Profile'
import ActiveStudent from './pages/dashboard/student/ActiveStudent'
import GraduatedStudent from './pages/dashboard/student/GraduatedStudent'
import Salary from './pages/dashboard/salary/Salary'
import Payments from './pages/dashboard/payments/Payments'
import Statistics from './pages/dashboard/statistics/Statistics'
import Staff from './pages/dashboard/staff/Staff'
import Reports from './pages/dashboard/reports/Reports'
import Settings from './pages/dashboard/settings/Settings'
import Calendar from './pages/dashboard/calendar/Calendar'
import List from './pages/dashboard/group/list/List'
import GroupAttendance from './pages/dashboard/group/group-attendance/GroupAttendance'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path="/users/:id" element={<UsersDateil />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='' element={<Group/>}>
             <Route path='' element={<List/>} />
             <Route path='group-attendance' element={<GroupAttendance/>} />
            </Route>
            <Route path='student' element={<Student/>}>
               <Route path='' element={<ActiveStudent/>}/>
               <Route path='graduated-student' element={<GraduatedStudent/>}/>
               <Route path='inactive' element={<div className='flex flex-col-reverse w-36 text-center'>inActive <img src="https://img.icons8.com/ios/100/808080/delete-user-male--v1.png" className='w-36'  alt="" /></div>}/>
            </Route>
            <Route path='profile' element={<Profile/>}/>
            <Route path='salary' element={<Salary/>}/>
            <Route path='payments' element={<Payments/>}/>
            <Route path='statistics' element={<Statistics/>}/>
            <Route path='staff' element={<Staff/>}/>
            <Route path='calendar' element={<Calendar/>}/>
            <Route path='reports' element={<Reports/>}/>
            <Route path='settings' element={<Settings/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default React.memo(App)