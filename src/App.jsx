import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Carta } from './routes/Carta'
import { Blog } from './routes/Blog'
import { CartaDetail } from './routes/CartaDetail'


function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/carta' element={<Carta />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/carta/:categoria' element={<CartaDetail />}></Route>
      </Routes>
    </>
  )
}

export default App
