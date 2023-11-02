import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import {Col,Container,Row} from 'react-bootstrap'
import img1 from "../assets/one.jpg"
import img2 from "../assets/two.jpg"
import img3 from "../assets/three.jpg"

const Home = () => {
  return (
    <Container  fluid >
       
          
<Row>
    <Col>

    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={img1} height={700}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={img2} height={700}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={img3} height={700}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    </Col>
</Row>



            
       
    </Container>

  )
}

export default Home