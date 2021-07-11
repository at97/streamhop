import { React, useState } from "react";
import Link from "react-router-dom/Link";
import logo from "../navbar_logo.png";
// import Modal components
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";
// Import Navbar components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import Form components
import Form from "react-bootstrap/Form";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleLoginShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/" className="navbar-brand-font">
                    <img src={logo} alt="logo" />
                streamhop
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Register</Nav.Link>
                        <Nav.Link onClick={handleLoginShow}>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Login Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName="modal-50w">
                <Modal.Header className="rm-bt-pd" closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body className="rm-tp-pdrm-bt-pd">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="rm-tp-pd">
                    <Button className="w-100" variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    <Form.Group className="float-left" controlId="formBasicCheckbox">
                        <Form.Check defaultChecked={true} type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <p className="ml-max float-right">Forgot your password?</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header;
