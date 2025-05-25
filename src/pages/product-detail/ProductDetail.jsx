import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { api } from "../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-2   py-10 items-start">
      <div className="flex gap-16">
        <img className="w-96 h-[360px] px-2 bg-gray-300 rounded-[10px]" src={data?.images[index]} alt="" />
        <div className="flex flex-col gap-9">
            {data?.images?.map((item, inx) => (
                <img onClick={() => setIndex(inx)} src={item}  className="w-24 h-24 px-2 bg-gray-300 rounded-[10px]" key={inx} alt="" />
            ))}
        </div> 
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl">{data?.title}</h1>
        <strong className="text-4xl">{data?.price} USD</strong>
        <p><span class="text-yellow-400">★</span> 5.0 (4 sharsh)</p>
        <p className="">{data?.description}</p>
      </div>
      <div className="container mx-auto flex gap-6 mb-6 mt-6">
    {data?.reviews?.map((index)=> (
      <div key={index.rating} className="bg-slate-900 p-2.5 rounded-2xl w-[370px] text-white">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
          <h3>John Doe</h3>
          <h4>24-May</h4>
          </div>
          <div>
          <span class="text-yellow-400">★★★★★</span>
          </div>
        </div>
        <h3>{index.comment}</h3>
        <h3>{index.date}</h3>
        <h3>{index.reviewerName}</h3>
        <h3>{index.reviewerEmail}</h3>
      </div>
    ))}
  </div>
    </div>
  );
};

export default React.memo(ProductDetail);
