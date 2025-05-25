import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import { api } from '../../api'
import User from '../../components/user/User'


const Users = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    api
      .get("/users")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false))
  }, [])
  
  if(error) {
    return <div className='text-center text-red-500'>
      <p>Somthing went wrong :(</p>
    </div>
  }

  return (
    <div>
      {loading && <Skeleton count={30}/>}
      <User data={data?.users} />
    </div>
  )
}

export default React.memo(Users)