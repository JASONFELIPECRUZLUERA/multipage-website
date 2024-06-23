import React from 'react'
import Home from "./components/home/Home"
import NavBar from "./components/navbar/NavBar"
import Destination from './components/destination/Destination'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (

      <div className='relative'>

        <div className='absolute'>
          <NavBar />
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
          </Routes>
        </div>

      </div>

  )
}

export default App
