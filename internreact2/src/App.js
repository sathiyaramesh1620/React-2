import React from 'react'
import Navbars from './Navbar/Navbars'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
import LoginSignup from './Component1/LoginSignup'

import Footer from './Footer/Footer'
const App = () => {
  return (
    <div>
      <Router>
      <Navbars/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        
      </Routes>
      </Router>
    <Footer/>
    </div>
  )
}

export default App