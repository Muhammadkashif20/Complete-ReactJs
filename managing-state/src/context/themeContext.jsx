import React, { createContext, useState } from 'react'

export const themeContext=createContext()
const HandleThemeContext = ({children}) => {
  const [themeColor,setThemeColor]=useState("light")
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
