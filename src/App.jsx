import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ReadVillagers from './components/ReadVillagers'
import EditVillager from './components/EditVillager'
import CreateVillager from './components/CreateVillager'
import { supabase } from './client'

function App() {
  const { data: villagers } = await supabase.from('villagers').select('*');

 
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
