import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
   const navigate = useNavigate()

  return (
    <div>
        <h2 className='text-center text-4xl mb-8'>products</h2>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-15'>
        {
            data?.map((product)=> (
                <div key={product.id} className='flex flex-col gap-1  bg-gray-600  text-white shadow-md'>
                   <img loading='lazy' onClick={()=> navigate(`/product/${product.id}`)} className='bg-gray-200' src={product.thumbnail} alt={product.title} />
                   <h3 className='p-2'><span className='font-bold'>title:</span> {product.title}</h3>
                   <h3 className='p-2'><span className='font-bold'>price:</span> {product.price}</h3>
                   <h3 className='p-2'><span className='font-bold'>category:</span> {product.category}</h3>
                   <h3 className='p-2'><span className='font-bold'>brand:</span> {product.brand}</h3>
                   <h3 className='p-2'><span className='font-bold'>createdAt:</span> {product.meta.createdAt}</h3>
                   <h3 className='p-2'><span className='font-bold'>updatedAt:</span> {product.meta.updatedAt}</h3>
                   <h3 className='p-2'><span className='font-bold'>barcode:</span> {product.meta.barcode}</h3>
                   <img loading='lazy' className='w-30 h-30 mx-auto mb-4' src={product.meta.qrCode} alt="" />
                </div>
            ))
        }
    </div>
    </div>
  );
};

export default React.memo(Products);
