import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../api';

const UsersDateil = () => {
    const { id } = useParams();
  const [data, setData] = useState(null);
  

  useEffect(() => {
    api
    .get(`/users/${id}`)
    .then((res) => setData(res.data));
  }, [id]);
  
  
  return (
    <div className="container mx-auto py-10 flex justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
      <img src={data?.image} alt={data?.firstName} className="w-32 h-32 rounded-full mx-auto mb-4"/>
      <h2 className="text-center text-2xl font-bold mb-2">{data?.firstName} {data?.lastName}</h2>
      <p className="text-center text-gray-600 mb-4">{data?.email}</p>
      <div className="space-y-2 text-sm">
        <p><strong>Phone:</strong> {data?.phone}</p>
        <p><strong>Age:</strong> {data?.age}</p>
        <p><strong>Gender:</strong> {data?.gender}</p>
        <p><strong>Username:</strong> {data?.username}</p>
        <p><strong>Country:</strong> {data?.address?.country}</p>
      </div>
    </div>
  </div>
  )
}

export default React.memo(UsersDateil)