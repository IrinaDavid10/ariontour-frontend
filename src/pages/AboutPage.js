import React, { useState, useEffect } from "react";
import { Figure, Card, Button } from "react-bootstrap";
import { CgSearchFound } from 'react-icons/cg';
import { IoTicketSharp } from "react-icons/io5";
import { BiSupport } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';
import Badge from 'react-bootstrap/Badge';

function AboutPage() {
    return (
        <div>
            
            <Badge className="text-light mt-5" style={{fontSize:'20px', marginRight:'50%'}} pill bg="secondary">
            Our history
            </Badge>{' '}

            <Figure className="mb-5" style={{ display: 'flex', marginLeft: '22%', marginTop: '2%' }}>
                <AiOutlineStock size={130} color="white" />
                <Figure.Caption className="text-light" style={{ marginLeft: '2%', fontFamily: "Roboto", fontWeight: 300, fontSize: "15px", textAlign: "center" }}>
                    <figcaption className="mb-3" style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "30px", textAlign: "center" }}>Experience on the market</figcaption>
                    Our company has been in the business of ticket sales for over 10 years.<br></br>
                    We have provided tickets to some of the most popular and successful concerts of Ariana Grande around the world.
                </Figure.Caption>
            </Figure>
            <hr style={{ border: "1px solid #ccc" }} />


            <Card bg="dark" border="dark">
                <Card.Body>
                    <Card.Title className="text-light fs-1 text">Objectives & services</Card.Title>
                </Card.Body>
            </Card>

            <Figure className="mb-5" style={{ display: 'flex', marginLeft: '23%', marginTop: '2%' }}>
                <CgSearchFound size={130} color="white" />
                <Figure.Caption className="text-light" style={{ marginLeft: '2%', fontFamily: "Roboto", fontWeight: 300, fontSize: "15px", textAlign: "center" }}>
                    <figcaption className="mb-3" style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "30px", textAlign: "center" }}>Easy event browsing </figcaption>
                    The website allows customers with an account to browse events, view locations, dates and available tickets.<br></br>
                    Buy tickets in just a few steps and get ready for the big show!
                </Figure.Caption>
            </Figure>

            <Figure style={{ display: 'flex', marginRight: '-18%', marginTop: '2%' }}>
                <Figure.Caption className="text-light" style={{ marginLeft: '25%', marginRight: '2%', fontFamily: "Roboto", fontWeight: 300, fontSize: "15px", textAlign: "center" }}>
                    <figcaption className="mb-3" style={{ marginLeft: '5%', fontFamily: "Roboto", fontWeight: 500, fontSize: "30px", textAlign: "center" }}>Quick ticket purchasing</figcaption>
                    Our mission is to make it easy and convenient for fans to purchase tickets to their favorite events by Ariana Grande.<br></br>
                    We strive to provide an enjoyable and seamless ticket buying experience for our customers.
                </Figure.Caption>
                <IoTicketSharp size={120} color="white" />
            </Figure>

            <Figure className="mt-5" style={{ display: 'flex', marginLeft: '23%', marginTop: '2%' }}>
                <BiSupport size={120} color="white" />
                <Figure.Caption className="text-light" style={{ marginLeft: '2%', fontFamily: "Roboto", fontWeight: 300, fontSize: "15px", textAlign: "center" }}>
                    <figcaption className="mb-3" style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "30px", textAlign: "center" }}>Live support chat</figcaption>
                    The website offers live chat support to help customers with an account.<br></br>
                    An admin will provide help for any questions or issues they may encounter during the ticket buying process or after.
                </Figure.Caption>
            </Figure>


            <Figure style={{ display: 'flex', marginRight: '-35%', marginTop: '2%' }}>
                <Figure.Caption className="text-light" style={{ marginLeft: '25%', marginRight: '2%', fontFamily: "Roboto", fontWeight: 300, fontSize: "15px", textAlign: "center" }}>
                    <figcaption className="mb-3" style={{ marginLeft: '5%', fontFamily: "Roboto", fontWeight: 500, fontSize: "30px", textAlign: "center" }}>Secure payment</figcaption>
                    We use a secure payment system to ensure that all transactions are safe and protected.<br></br>
                    All our clients can choose from the variety of payment methods the one that fits for their case.
                </Figure.Caption>
                <RiSecurePaymentLine size={140} color="white" />
            </Figure>

            <Card bg="dark" border="light">
                <Card.Body>
                    <Card.Title className="text-light fs-1 text">Popular concert locations</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}
export default AboutPage;