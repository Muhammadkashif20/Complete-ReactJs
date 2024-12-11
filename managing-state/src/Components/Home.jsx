import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const Home = () => {
    const {user}=useContext(userContext)
  return (
    <div>
        <h1 className='text-center font-bold text-2xl'>Hello {user.name}</h1>
      <h1 className='text-center font-bold text-3xl'>Welcome To Our Home Page</h1>
    </div>
  )
}

export default Home
