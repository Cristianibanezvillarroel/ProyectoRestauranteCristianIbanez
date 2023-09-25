import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Carta } from './routes/Carta'
import { Blog } from './routes/Blog'
import { Reservas } from './routes/Reservas'
import { CartaDetail } from './routes/CartaDetail'
import { Footer } from './components/Footer'


function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/carta' element={<Carta />}></Route>
        <Route path='/reserva' element={<Reservas />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/carta/:categoria' element={<CartaDetail />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
