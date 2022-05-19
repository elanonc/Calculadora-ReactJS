import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Calculadora } from './Components/Calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Calculadora Simples</h1>
      <Calculadora />
    </div>
  )
}

export default App
