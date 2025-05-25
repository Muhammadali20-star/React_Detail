import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className='mb-20'>
      <h2 className='text-center text-4xl mb-8'>Users</h2>
      <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-6'>
        {
          data?.map((item) => (
            <div key={item.id} className='bg-stone-100 text-[12px] flex flex-col gap-4  rounded-[10px] pb-10 p-1' style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
              <div className='w-[100px] h-[100px] mx-auto mb-6'>
              <img loading='lazy' onClick={()=> navigate(`/users/${item.id}`)} src={item.image} alt="" />
              </div>
              <h3><span className='font-bold'>firstName:</span> {item.firstName}</h3>
              <h3><span className='font-bold'>lastName:</span> {item.lastName}</h3>
              <h3><span className='font-bold'>age:</span> {item.age}</h3>
              <h3><span className='font-bold'>birthDate:</span> {item.birthDate}</h3>
              <h3><span className='font-bold'>gender:</span> {item.gender}</h3>
              <h3><span className='font-bold'>email:</span> {item.email}</h3>
              <h3><span className='font-bold'>phone:</span> {item.phone}</h3>
              <h3><span className='font-bold'>username:</span> {item.username}</h3>
              <h3><span className='font-bold'>password:</span> {item.password}</h3>
              <h3><span className='font-bold'>country:</span> {item.address.country}</h3>
              <h3><span className='font-bold'>university:</span> {item.university}</h3>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(User)