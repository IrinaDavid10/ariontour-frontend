import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import Dropdown from 'react-bootstrap/Dropdown';
import PanelPage from "../pages/PanelPage";

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
        /*
        {
            id: 8,
            path: "/forgotpassword",
            text: "Forgot password"
        }
        */
    ]
    function LoginButton(){
        if(window.authorized === true){
            return( 
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic"> Your profile
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/panel">Panel</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            )
        }else
        {
            return <Button variant="outline-dark"  href="/">Login</Button>
        }
    }
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
                    <LoginButton/>  
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;