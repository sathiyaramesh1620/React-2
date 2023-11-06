import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbars from './Navbar/Navbars'
// import Home from './Components/Home'
// import PhotoGallary from './Components/PhotoGallary'
const App = () => {
  return (
    <Router>
<Navbars/>
      <Routes>
        {/* <Route path='/home' element={<Home/>}/>
        <Route path='/photogallary' element={<PhotoGallary/>}/> */}
        
      </Routes>
    </Router>
  )
}

export default App