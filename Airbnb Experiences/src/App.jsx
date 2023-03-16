import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import data from './data'


function App() {
  let cards =data.map(item =>{
    return (
    <Card
        key={item.id}
        item ={item}
  />)
  })

  return(  
    <div>
      <Navbar/>
      <HeroSection/>
      <section className="cards-list">
                {cards}
      </section>
      
    </div>
  )}

export default App
