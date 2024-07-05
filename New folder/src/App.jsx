import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Main from './Components/Main'
import Center from './Components/Center'
import Last from './Components/Last'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
     <Navbar/>
     <Main/>
     <Center/>
     <Last/>
     <Footer/>
    </div>
  )
}

export default App
