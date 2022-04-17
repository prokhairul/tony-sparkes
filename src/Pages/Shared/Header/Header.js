import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/main-logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className='nav-bg'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img src={logo} height="35px" alt="Tony Sparkes" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            <Nav.Link href="#services">Purchase</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Register</Nav.Link>
                            <Nav.Link href="#deets">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;