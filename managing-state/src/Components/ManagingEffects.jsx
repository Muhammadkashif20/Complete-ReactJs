import React, { useEffect, useState } from "react";
import App from "../App";

const ManagingEffects = () => {
  const [products,setProducts]=useState()
  const [loading,setLoading]=useState(false)
  const [count, setCount] = useState(0);
 /*  useEffect(() => {
    alert("Welcome UseEffect Is Running!");
  }, []);
  useEffect(() => {
    alert("Count Value Was Changed!");
  }, [count]);
  useEffect(() => {
    if (count == 1) {
      alert("Your Condtion is True!");
    }
  }, []); */
  useEffect(()=>{
    const fetchproducts= async()=>{
      try{
        setLoading(true)
        let res = await fetch("https://dummyjson.com/products");
        res=await res.json()
        console.log("fetchProducts=>",res);
        setProducts(res.products)
        setLoading(false)

      }
      catch(error){
        console.log("error=>",error);
      }
}
fetchproducts()
  },[])
  return <div>
    {products?.map((data)=>{
      return(
        <div key={data.id}>
        <h1>{data.title}</h1>
        </div>
      )
    })}
  </div>;
};

export default ManagingEffects;
