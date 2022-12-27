import { useState } from 'react'
import Button from './components/atoms/button/button'
import Input from './components/atoms/input/input'
import Image from './components/atoms/image/image'
import InputGif from './components/molecules/inputGif/inputGif'
import ImageCard from './components/molecules/imageCard/imageCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>Hello</h1><br />
      <Button type="primary" text="HW"/><br />
      <Button type="secondary" text="HW2"/><br />
      <Button text="HW2"/><br />
      <Button no_radius_left={true} text="HW2"/><br />
      <Input name="input1" placeholder="ingrese texto" value='123'/><br />
      <Input name="input1" placeholder="ingrese texto" value='123' no_radius_right={true}/><br />
      <Image url='https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif'/> */}
      <InputGif text='hello'/>
      
    </div>
  )
}

export default App
