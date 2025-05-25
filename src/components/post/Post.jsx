import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({data}) => {
    const navigate = useNavigate()
  return (
    <div>
       <h2 className='text-center text-4xl mb-8'>Posts</h2>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4'>
        {
            data?.map((post)=> (
                <div key={post.id} className='bg-gray-200  p-6 rounded-[10px]'  onClick={()=> navigate(`/post/${post.id}`)} style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
                   <h3><span className='font-bold'>title:</span> {post.title}</h3>
                   <h3><span className='font-bold'>body:</span> {post.body}</h3>
                   {post?.tags?.map((index, id)=>(
                     <h3 key={id}><span className='font-bold'>tags:</span> {index}</h3>
                   ))}
                   <h3><span className='font-bold'>likes:</span> {post.reactions.likes}</h3>
                   <h3><span className='font-bold'>dislikes:</span> {post.reactions.dislikes}</h3>
                   <h3><span className='font-bold'>views:</span> {post.views}</h3>
                   <h3><span className='font-bold'>userId:</span> {post.userId}</h3>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default React.memo(Post)