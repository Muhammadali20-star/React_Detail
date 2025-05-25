import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen  flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300'>
      <div className='w-[475px] h-[550px] bg-[#FFFFFF] rounded-2xl mx-auto border justify-center py-2 px-8 flex flex-col gap-4'>
      <h1 className='text-[22px] text-[#000000] font-semibold text-center pt-[15px'>Login</h1>
      <p className='text-[14px] text-[#6C6C6C]  font-normal text-center pt-[9px]'>Enter your credentials to access your account</p>
      <div className='container mx-auto flex flex-col gap-2 pt-12'>
         <div className='mt-[15px]'>
          <p>Enter new login</p>
          <input className='border-1 w-[415px] h-[44px] rounded-[4px] mt-[10px]' placeholder="Enter your login" type="text" />
         </div>
         <div>
          <p>Create new password</p>
          <input className='border-1 w-[415px] h-[44px] mt-[10px] rounded-[4px]'  placeholder="Enter your password" type="password" />
         </div>
         <div className='flex flex-col'>
         <button className='w-[415px] h-[44px] mt-[30px] bg-[#FEAF00] rounded-[4px]'>Login</button>
         <button className='w-[415px] h-[44px] mt-[30px] bg-[#FEAF00] rounded-[4px] underline' onClick={()=> navigate('/')}>Go Home</button>
         </div>
      </div>
    </div>
    </div>
  )
}

export default React.memo(Login)
