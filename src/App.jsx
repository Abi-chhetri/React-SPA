import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Func from './Pages/Func'
import { Nav, Footer } from './Components'

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/func' element={<Func/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
