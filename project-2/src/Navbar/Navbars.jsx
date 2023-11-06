
import React, { useState, useEffect } from 'react';
import { Container,Row, Col, Navbar, Nav } from 'react-bootstrap';
const Navbars = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => response.json())
          .then((data) => setImages(data.slice(0, 52))); // Limit to the first 50 images
        }, []);
    
  return (
      <div>
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container >
        <Navbar.Brand>Image Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className='bg-dark mt-5 pt-5'>
      <Row >
        <h1 className='display-3 text-white text-center mb-5 text-uppercase'>Fetching the Photos</h1>
        <hr className='text-white'></hr>
        {images.map((image) => (
          <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
            <div className="image-card text-center text-white">
              <img src={image.thumbnailUrl} alt={image.title} />
              <p>{image.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default Navbars