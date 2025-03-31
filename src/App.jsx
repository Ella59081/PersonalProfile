import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/header'
import Home from './assets/Pages/Home/home'
import About from './assets/Pages/about/about'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     {/* <Routes>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      
     </Routes> */}
    </>
  )
}

export default App
