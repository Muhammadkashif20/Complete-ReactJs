import React, { createContext, useState } from 'react'

export const themeContext=createContext()
const HandleThemeContext = ({children}) => {
  const [themeColor,setThemeColor]=useState("light")
  console.log("themeColor=>",themeColor);
  
  return (
    <div>
      <themeContext.Provider
      value={{themeColor,setThemeColor}}
      >
          {children}
      </themeContext.Provider>
    </div>
  )
}

export default HandleThemeContext
