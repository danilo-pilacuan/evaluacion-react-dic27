import { useState } from 'react'
import Button from './components/atoms/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button type="primary" text="HW"/>
      <Button type="secondary" text="HW2"/>
      <Button text="HW2"/>
    </div>
  )
}

export default App
