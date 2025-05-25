import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../api';


const RecipeDetail = () => {
    const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api
    .get(`/recipe/${id}`)
    .then((res) => setData(res.data));
  }, [id]);
  return (
   <div className="container mx-auto py-10">
      <div className="bg-gray-100 shadow-md p-2 rounded-lg w-96 mx-auto">
        <img src={data?.image} alt={data?.name} className="w-[500px] h-64 mx-auto  rounded-lg mb-6" />
        <h1 className="text-[20px]"> <span className='font-bold'>name:</span> {data?.name}</h1>
        <ul>
          {data?.ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default React.memo(RecipeDetail)