import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar(){

    const links = [
      
        {
            id: 1,
            path: "/",
            text: "AriOnTour"
        },
        {
            id: 2,
            path: "/customer",
            text: "Customer Refine"
        },
        {
            id: 3,
            path: "/register",
            text: "Customer registration"
        },
        {
            id: 4,
            path: "/customers",
            text: "Customers overview"
        },
        {
            id: 5,
            path: "/events",
            text: "Events"
        }
    ]

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href={links[0].path}><img
                        src="/images/AriLogo.png"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            {links.slice(1).map(link => {
                                return (
                                <Nav.Link className="me-5"  key={link.id} href={link.path}>
                                {link.text}
                                </Nav.Link>
                            )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                            <Button variant="outline-dark"  href="/login">Login</Button>          
                        </Navbar.Collapse> 
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;