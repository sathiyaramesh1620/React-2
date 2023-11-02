
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import image from '../assets/logo.jpg'
import {Outlet} from 'react-router-dom'



const Navbars = () => {
    return (
<header>
<Navbar  expand="lg" bg='dark' variant='dark' collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#home"><span color='background:red'> BEACH</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-auto">
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/service">SERVICE</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
              <Nav.Link href="/signup">SIGNUP</Nav.Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>

</header>



  
        

    )
}

export default Navbars