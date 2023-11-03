import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from "./Components/Home"
import About from './Components/About'
import Courses from './Components/Courses'
import Reviews from './Components/Reviews'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <div id="home">
          <Home/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id="courses">
          <Courses/>
        </div>
        <div id='reviews'>
<Reviews/>
        </div>
        <div id='contact'>
          <Contact/> 
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default App