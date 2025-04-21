import { useRoutes, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ReadVillagers from './components/viewAllVillager/page'
import EditVillager from './components/editvillager/page'
import CreateVillager from './components/create-villager/page'
import { useState } from 'react'

function App() {
  const [villagers] = useState([]);


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
  const location = useLocation();
  const pageTitle = location.pathname.startsWith('/edit')
    ? 'Update Villager'
    : '🌳 Villager Squad';

  return ( 

    <div className="App">

      <div className="header">
        <h1>{pageTitle}</h1>
        
          <div>
            <Link to="/"><button className="headerBtn"> All Villagers  </button></Link>
            <Link to="/new"><button className="headerBtn"> Add Villager  </button></Link>
        </div>
        
      </div>
      <div className='villager-gallery'>{element}</div>
      
    </div>
  )
}

export default App
