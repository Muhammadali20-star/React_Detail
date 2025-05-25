import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import { api } from '../../api'
import Recipes from '../../components/recipes/Recipes'

const Recipe = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    api
      .get("/recipe")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false))
  }, [])
  
  return (
    <div>
      {loading && <Skeleton count={30}/>}
      <Recipes data={data?.recipes}/>
    </div>
  )
}

export default React.memo(Recipe)