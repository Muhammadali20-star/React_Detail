import React from 'react'

const Button = ({children}) => {
  return (
    <button className='py-2 px-6 bg-blue-500 rounded-2xl text-white hover:opacity-60'>
        {children}
    </button>
  )
}

export default Button