import { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'

function App() {
  let cards =data.map(item =>{
    
    return(
      <Card
        key ={item.id}
        item={item}
      />
      
    )

    
  })
  
  return (
    <div className="App">
      <Nav/>
      <section>
        {cards}
      </section>
      
      
    </div>
  )
}

export default App
