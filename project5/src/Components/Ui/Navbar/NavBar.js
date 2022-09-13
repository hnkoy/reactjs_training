import React from "react";
//import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
const NavBar = (props) => (
    //put your component codes
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Portefiolo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/location'>
                    <Nav.Link>Location</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                    <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       

    </>
)
export default NavBar;