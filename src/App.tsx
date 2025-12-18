import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QRTablet from './pages/QRTablet'

function App() {
  return (
    <BrowserRouter basename="/Merry-ChristMAKi-Welcome">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrtablet" element={<QRTablet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
