import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ReadVillagers from './components/viewAllVillager/page'
import EditVillager from './components/editvillager/page'
import CreateVillager from './components/create-villager/page'
import { useState } from 'react'

function App() {
  const [villagers, setVillagers] = useState([]);


  let element = useRoutes([
    {
      path: "/",
      element: <ReadVillagers data={villagers} />
    },
    {
      path: "/edit/:id",
      element: <EditVillager data={villagers} />
    },
    {
      path: "/new",
      element: <CreateVillager />
    }
  ]);


  return ( 

    <div className="App">

      <div className="header">
        <h1>🌳 Villager Squad</h1>
        <Link to="/"><button className="headerBtn"> View Villagers 🐾 </button></Link>
        <Link to="/new"><button className="headerBtn"> Add Villager ➕ </button></Link>
      </div>
      {element}
    </div>
  )
}

export default App
