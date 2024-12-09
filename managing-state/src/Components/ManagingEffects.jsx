import React, { useEffect, useMemo, useState } from "react";
import App from "../App";
import { useCallback } from "react";

const ManagingEffects = () => {
  const [count,setCount]=useState(3)
  const [calculate,setCalculate]=useState(0)
  // states for ecommerce work
/*   const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false); */
  
/*   const [count, setCount] = useState(0);
   useEffect(() => {
    alert("Welcome UseEffect Is Running!");
  }, []); */
/*   useEffect(() => {
    alert("Count Value Was Changed!");
  }, [count]); */
/*   useEffect(() => {
    if (count == 1) {
      alert("Your Condtion is True!");
    }
  }, []); */
/*   useEffect(()=>{
    setCalculate(count*2)
  },[count]) */

  // Difference Between UseCallback & UseMemo:-
    // useEffect(()=>{
    //   console.log("UseEffect Is Call");
    // },[])
// const handleCallback=()=>{
//   useMemo(()=>{
//     const randNum=Math.random()*1000
//     console.log("randNum=>",randNum);
//   },[])
//   }
  
// UseCallback & UseMemo ki Examples jab hme scnrew milega tb krenge.
// useContext:

    
    // all ecommerce work
    // useEffect(() => {
      //   const fetchproducts = async () => {
        //     try {
          //       setLoading(true);
          //       let res = await fetch("https://dummyjson.com/products");
  //       res = await res.json();
  //       console.log("fetchProducts=>", res);
  //       setProducts(res.products);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("error=>", error);
  //     }
  //   };
  //   fetchproducts();
  // }, []);
  // return (
  //   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
  //     {products?.map((data) => {
  //       return (
  //         <div key={data.id}>
  //           <div className="border my-5 h-[20rem] w-[20rem] ">
  //             <h1>{data.title}</h1>
  //             <p>{data.description}</p>
  //             <span>{data.price}</span>
  //             <button>View Detail</button>
  //             <button>Add To Cart</button>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
return(
  <div>
  {/* <button onClick={()=>setCount(count+1)}>Its Increment The Value {count}</button> */}
  {/* <h1>Calculate Value {calculate}</h1>
  <button onClick={()=>setCount(count*2)}>+</button> */}
  {/* <button onClick={handleCallback}>Callback Hook</button>/ */}
  </div>
)
};


export default ManagingEffects;
