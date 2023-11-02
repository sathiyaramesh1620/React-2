import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img4 from "../assets/four.jpg"

const Service = () => {
    let [menu] = useState([1, 2, 3, 4, 5, 6])
    return (
        <section id='menu' className='bg-light'>
            <Container>
                <div className="text-center">
                    <h3 className='text-primary my-3 py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, tempore.</h3>
                </div>
                <Row>
                    {
                        menu.map((item) => {
                            return (
                                <Col md={6} lg={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img4} Rounded />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className='text-center'>
                                                <Button variant="primary">Go somewhere</Button>

                                            </div>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>


        </section>
    )
}

export default Service