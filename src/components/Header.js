import React from 'react'
// Import Navbar components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Streamhop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#pricing">Movies & TV Shows</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#1">Register</Nav.Link>
                    <Nav.Link eventKey={2} href="#2">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;