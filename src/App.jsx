
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home1 from './Home'
import Contact from './Contact'
import Navbar from './component/Navbar/Navbar'
import Container from './Container'

function App() {
 
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home1 />}  />
      <Route path='/About' element={<About />}  />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Card' element={<Container />} />
      <Route path='/Tailwind' element={<Tailwind />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App