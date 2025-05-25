import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../api';

const PostDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null); 
    
  
    useEffect(() => {
      api
      .get(`/post/${id}`)
      .then((res) => setData(res.data));
    }, [id]);

  return (
    <div className='container mx-auto bg-gray-200 p-6 w-80 rounded-2xl mt-8'>
      <h3><span className='font-bold'>Title:</span> {data?.title}</h3>
      <h3><span className='font-bold'>Body:</span> {data?.body}</h3>
      <h3><span className='font-bold'>Likes:</span> {data?.reactions?.likes}</h3>
      <h3><span className='font-bold'>Dislikes:</span> {data?.reactions?.dislikes}</h3>
      <h3><span className='font-bold'>Views:</span> {data?.views}</h3>
      <h3><span className='font-bold'>User ID:</span> {data?.userId}</h3>
    </div>
  )
}

export default React.memo(PostDetail)