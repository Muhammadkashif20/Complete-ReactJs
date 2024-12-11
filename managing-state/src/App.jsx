import React from 'react'
import ManageStates from './Components/ManagingStates'
import ManagingEffects from './Components/ManagingEffects'
import GameOfProps from './Components/GameOfProps'
import Navbar from './Navbar'
import HandleThemeContext from './context/themeContext'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <HandleThemeContext>
      <Navbar/>
      <Home/>
      {/* <ManageStates/> */}
       {/* <ManagingEffects/> */}
      {/* <GameOfProps color={"Navy" +" & "+ "Teal"}/> */}

      </HandleThemeContext>
    </div>
  )
}

export default App
