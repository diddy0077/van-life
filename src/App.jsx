
import Home from './pages/Home.jsx'
import {  Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </>
  )
}

export default App
