import React from 'react'

const Profile = () => {

  return (
    <div className='w-48'>
        <h2 className='mb-6'>Profile</h2>
        <div className='bg-gray-300 p-2'>
        <div className='flex flex-col text-center'>
        <img src="https://img.icons8.com/ios-filled/100/4b5563/user.png"  alt="" />
        <p>John Doe</p>
        </div>
        <p>john.doe@example.com</p>
        <p>+998 90 123 45 67</p>
        </div>
    </div>
  )
}

export default Profile