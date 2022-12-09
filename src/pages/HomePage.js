import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CheckExpiry from "../components/CheckExpiry";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {


    return (
        //<Button onClick={() => console.log(CheckExpiry.IsExpired())} >sdfsdfsdf</Button>
        <Container fluid className="p-0" style={{ overflow: "hidden" }}>
            <Row className="no-gutters">
                <Col >
                    <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
                        
                        <Card.Img src="/images/Ari2.jpg" alt="Card image" />

                        <Card.ImgOverlay className=" bottom-100 text-center">
                          
                           
                            <Button variant="secondary" >Find out more</Button>
                            <Card.Text >
                                Take part in a wonderful show by
                                <br></br>
                                Ariana Grande
                            </Card.Text>
                            
                        </Card.ImgOverlay>

                    </Card>
                </Col>
            </Row>
        </Container>


    )
}
export default HomePage;