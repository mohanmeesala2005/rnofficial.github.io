import { useState } from 'react'
import Navbar from './components/navbar'
import Rnlogo from './components/rnlogo'
import AboutUs from './components/aboutus'
import Sponsers from './components/sponsers'
import Teamrn from './components/Teamrn'
import HeroSlider from './components/HeroSlider'
import Carousel from "./components/Carousel";

import './App.css'
import './index.css'
const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return (
    <div>
      <Navbar />
      <Rnlogo />
      <AboutUs />
      <Sponsers />
      <Teamrn />
      <HeroSlider />
      <Carousel images={images} />
        
    </div>
  )
}

export default App
