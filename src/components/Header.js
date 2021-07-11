import React from "react";
import Link from "react-router-dom/Link";
import logo from "../navbar_logo.png";
// Import Navbar components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="">
                <img src={logo} alt="logo" />
                streamhop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                    <Nav.Link as={Link} to="/television">TV Shows</Nav.Link>
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
