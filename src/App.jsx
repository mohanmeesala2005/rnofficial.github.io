import { useState } from 'react'
import Navbar from './components/navbar'
import Rnlogo from './components/rnlogo'
import AboutUs from './components/aboutus'
import Sponsers from './components/sponsers'
import Teamrn from './components/Teamrn'

import './App.css'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Rnlogo />
      <AboutUs />
      <Sponsers />
      <Teamrn />
     
    </div>
  )
}

export default App
