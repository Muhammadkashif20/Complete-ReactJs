import React from 'react'
import ManageStates from './Components/ManagingStates'
import ManagingEffects from './Components/ManagingEffects'
import GameOfProps from './Components/GameOfProps'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <ManageStates/> */}
      <ManagingEffects/>
      {/* <GameOfProps color={"Navy" +" & "+ "Teal"}/> */}
    </div>
  )
}

export default App
