import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

const Button = ({btnText,onPress}) => {
  const {themeColor}=useContext(themeContext)
  return (
    <button onClick={onPress} className={`${themeColor==="light" ? "bg-gray-700 text-white" : "bg-white text-gray-600"} rounded-md my-2 p-2 text-center `}>
      {btnText}
    </button>
  )
}

export default Button
