import { useState } from 'react'
import ImageConverter from './pages/ImageConverter'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MergePDF from './pages/MergePDF'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge" element={<MergePDF />} />
        <Route path="/image-convert" element={<ImageConverter />} />
        <Route path="/split" element={<Home />} />
        <Route path="/pageNo" element={<Home />} />
       </Routes>

    </>
  )
}

export default App
