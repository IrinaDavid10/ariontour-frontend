import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
function NavBar(){

    const links = [
        {
            id: 1,
            path: "/",
            text: "Home"
        },
      
        /*
        {
            id: 2,
            path: "/customer",
            text: "Customer Refine"
        },
        */
       /*
        {
            id: 3,
            path: "/register",
            text: "Customer registration"
        },
        */
       /*
        {
            id: 4,
            path: "/customers",
            text: "Customers overview"
        },
        */
        {
            id: 5,
            path: "/about",
            text: "About",
            roles:["CUSTOMER","ADMIN"]
         
        },
        {
            id: 6,
            path: "/events",
            text: "Events",
            roles:["CUSTOMER","ADMIN"]
        },
        {
            id: 7,
            path: "/contact",
            text: "Contact",
            roles:["CUSTOMER","ADMIN"]
        },
        {
            id: 8,
            path: "/adminpanel",
            text: "Admin panel",
            roles:["ADMIN"]
        },
        /*
        {
            id: 8,
            path: "/forgotpassword",
            text: "Forgot password"
        }
        */
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
                                if(jwt_decode(localStorage.getItem("Token")).roles.some(Role => link.roles.includes(Role)))
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