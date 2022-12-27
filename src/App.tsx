import { useState } from 'react'
import Button from './components/atoms/button/button'
import Input from './components/atoms/input/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button type="primary" text="HW"/>
      <Button type="secondary" text="HW2"/>
      <Button text="HW2"/>
      <Button no_radius_left={true} text="HW2"/>
      <Input name="input1" placeholder="ingrese texto" value='123'/>
      <Input name="input1" placeholder="ingrese texto" value='123' no_radius_right={true}/>
    </div>
  )
}

export default App
