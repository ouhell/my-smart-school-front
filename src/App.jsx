import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes , Route} from "react-router-dom"
import Admin from './container/admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
      <Route path='admin/*'  element={<Admin/>} />
     </Routes>
    </div>
  )
}

export default App
