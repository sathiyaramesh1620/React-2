import React from 'react'
import Navbars from './Navbar/Navbars'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'
import LoginSignup from './Component1/LoginSignup'
import Footer from './Footer/Footer'

 
const App = () => {

  // **********version 6.14***********
  // const router= createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Navbars/>}>
  //     <Route path='/home' element={<Home/>}/>
  //     <Route path='/about' element={<About/>}/>
  //     <Route path='/service' element={<Service/>}/>
  //     <Route path='/contact' element={<Contact/>}/>
  //     <Route path='/signup' element={<LoginSignup/>}/>

  //     </Route>


  //   )

  //   )
  //*********** */ version 6.17*****

  const router = createBrowserRouter([
    {
      path: "/", element: <Navbars />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "service", element: <Service /> },
        { path: "contact", element: <Contact /> },
        { path: "signup", element: <LoginSignup /> }
      ]
    }
  ])



  return (
    <div className='App'>
      {/* <Router>
      <Navbars/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        
      </Routes>
      </Router>
    <Footer/> */}

      <RouterProvider router={router} />

      <Footer />
    </div>
  )
}

export default App