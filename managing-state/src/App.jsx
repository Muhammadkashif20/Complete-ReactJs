import React from 'react'
import ManageStates from './Components/ManagingStates'
import ManagingEffects from './Components/ManagingEffects'
import GameOfProps from './Components/GameOfProps'
import Navbar from './Navbar'
import HandleThemeContext from './context/themeContext'
import Home from './Components/Home'
import HandleUserContext from './context/userContext'

const App = () => {
  return (
    <div>
      <HandleUserContext>
      <HandleThemeContext>
      <Navbar/>
      <Home/>
      {/* <ManageStates/> */}
       {/* <ManagingEffects/> */}
      {/* <GameOfProps color={"Navy" +" & "+ "Teal"}/> */}
      </HandleThemeContext>
      </HandleUserContext>
    </div>
  )
}

export default App
