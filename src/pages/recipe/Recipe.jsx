import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import { api } from '../../api'
import Recipes from '../../components/recipes/Recipes'

const Recipe = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading(true)
    api
      .get("/recipe")
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
      <Recipes data={data?.recipes}/>
    </div>
  )
}

export default React.memo(Recipe)