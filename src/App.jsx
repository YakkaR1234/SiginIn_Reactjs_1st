import { useState } from 'react'

import './App.css'
import Login_siginup from './components/Login_siginup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Login_siginup></Login_siginup>
      
    </>
  )
}

export default App
