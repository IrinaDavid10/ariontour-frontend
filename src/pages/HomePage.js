import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CheckExpiry from "../components/CheckExpiry";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';


function HomePage() {

    
    
    return (
        //<Button onClick={() => console.log(CheckExpiry.IsExpired())} >sdfsdfsdf</Button>
        <Container fluid className="p-0" style={{ overflow: "hidden" }}>
            <Row className="no-gutters">
                <Col >
                    <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
                        <Card.Img src="/images/Ari2.jpg" alt="Card image" />
                        <Card.ImgOverlay className=" bottom-100 text-center">
                            <Button variant="secondary mt-3" style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)" }}>Find out more</Button>

                            <Card.Text  className="  mt-5 fs-2 text"
                            >
                                Take part in a wonderful show
                                <br></br>
                                by Ariana Grande
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Alert variant="black text-light fs-1 text">
                    Photos from events
                </Alert>
            </Row>

            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/ari5.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Ari</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/Ari2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Ari</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/ari5.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Ari</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>


        </Container>



    )
}
export default HomePage;

