
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home1 from './Home'
import Contact from './Contact'

function App() {
 
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home1 />}  />
      <Route path='/About' element={<About />}  />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App