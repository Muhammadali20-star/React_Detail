import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Skeleton from "../skeleton/Skeleton";
import Products from "../../components/products/Products";

const Home = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    setLoading(true)
    api
      .get("/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false))
  }, []);

  return (
    <div id="home">
     {loading && <Skeleton count={30}/>}
    <Products data={data?.products} />
    </div>
  );
};

export default React.memo(Home);
