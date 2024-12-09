import React, { useContext } from "react";
import { themeContext } from "./context/themeContext";
const Navbar = () => {
  const {theme,setTheme}=useContext(themeContext)
  // console.log("colorContext=>",);
  
  return (
    <div className={`w-full p-4  ${theme=="light"?"bg-white text-gray-500" :" bg-deepPurple text-white"}`}> 
        <h1 className='text-white font-bold text-2xl'>Kashif Store</h1>
        <button onClick={()=>{
          if(theme==="light"){
            setTheme("dark")
          }
          else{
            setTheme("light")
          }
        }
        }>{theme==="light" ? "Dark":"Light"}</button>
    </div>
  ) 
}

export default Navbar
