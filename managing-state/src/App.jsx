import React from 'react'
import ManageStates from './Components/ManagingStates'
import ManagingEffects from './Components/ManagingEffects'
import GameOfProps from './Components/GameOfProps'

const App = ({color}) => {
  return (
    <div>
      {/* <ManageStates/> */}
      <ManagingEffects/>
      <GameOfProps color={"navy"}/>
    </div>
  )
}

export default App
