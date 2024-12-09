import React, { useContext } from 'react'
import HandleThemeContext from '../context/themeContext'

const GameOfProps = ({color}) => {
  const theme=useContext(HandleThemeContext)
  console.log("theme=>",theme);
  
  return (
    <div>
      <h1>Hi My App Color is {color}!</h1>
    </div>
  )
}

export default GameOfProps
