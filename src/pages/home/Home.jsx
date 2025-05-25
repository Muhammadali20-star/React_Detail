import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Skeleton from "../skeleton/Skeleton";
import Products from "../../components/products/Products";

const Home = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    setLoading(true)
    api
      .get("/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false))
  }, []);

  if(error) {
    return <div className='text-center text-red-500'>
      <p>Somthing went wrong :(</p>
    </div>
  }

  return (
    <div id="home">
     {loading && <Skeleton count={30}/>}
    <Products data={data?.products} />
    </div>
  );
};

export default React.memo(Home);
