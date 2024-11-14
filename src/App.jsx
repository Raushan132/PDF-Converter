import { useState } from 'react'
import ImageConverter from './pages/ImageConverter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ImageConverter />
    </>
  )
}

export default App
