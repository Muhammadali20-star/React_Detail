import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import { api } from '../../api'
import Post from '../../components/post/Post'

const Posts = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
      setLoading(true)
      api
        .get("/post")
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
    <Post data={data?.posts} />
    </div>
  )
}

export default React.memo(Posts)