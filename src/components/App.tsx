import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// import '../css/App.css'
import Home from './Home'
// import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
