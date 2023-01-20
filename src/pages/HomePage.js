import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CheckExpiry from "../components/CheckExpiry";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";



function HomePage() {

    const navigate = useNavigate();

    return (
        //<Button onClick={() => console.log(CheckExpiry.IsExpired())} >sdfsdfsdf</Button>
        <Container fluid className="p-0" style={{ overflow: "hidden" }}>
            <Row className="no-gutters">
                <Col >
                    <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
                        <Card.Img src="/images/Ari2.jpg" alt="Card image" />
                        <Card.ImgOverlay className=" bottom-100 text-center">
                            <Button variant="secondary mt-5" style={{ position: "absolute", top: "50%", transform: "translate(-280%, 120%)" }} onClick={() => navigate('/about', { replace: true })}>Find out more</Button>
                          
                                <Card.Text className="  mt-5  text " style={{ position: "absolute", top: "100%", transform: "translate(100%, 350%)", fontFamily: "Roboto", fontWeight: 500, fontSize: "32px" }}>
                                    Take part in a wonderful show
                                    <br></br>
                                    by Ariana Grande
                                </Card.Text>
                            
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Card bg="dark" border="dark">
                    <Card.Body>
                        <Card.Title className="text-light fs-1 text">Photos from events</Card.Title>
                    </Card.Body>
                </Card>
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
                            <h3>First slide</h3>
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
                            <h3>Second slide</h3>
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
                            <h3>Third slide</h3>
                            <p>Ari</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>


        </Container>



    )
}
export default HomePage;

