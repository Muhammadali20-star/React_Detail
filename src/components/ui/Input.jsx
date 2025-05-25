import React from 'react'

const Input = ({type="text", placeholder}) => {
  return (
    <input className='p-2 border border-gray-200 rounded-2xl' type={type} placeholder={placeholder}/>
  )
}

export default Input