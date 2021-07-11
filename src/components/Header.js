import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../navbar_logo.png";
// import Modal components
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";
// Import Navbar components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import Form components
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Header = () => {
    const [showSignIn, setSignInShow] = useState(false);
    const [showRegister, setRegisterShow] = useState(false);
    const handleSignInClose = () => setSignInShow(false);
    const handleSignInShow = () => setSignInShow(true);
    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);

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
                        <Nav.Link onClick={handleRegisterShow}>Register</Nav.Link>
                        <Nav.Link onClick={handleSignInShow}>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Sign in Modal */}
            <Modal
                show={showSignIn}
                onHide={handleSignInClose}
                centered
                dialogClassName="modal-50w">
                <Modal.Header className="rm-bt-pd" closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button className="w-100" variant="primary" type="submit" onClick={handleSignInClose}>
                        Login
                    </Button>
                    <Form.Group className="float-left" controlId="formBasicCheckbox">
                        <Form.Check defaultChecked={true} type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <p className="ml-max float-right">Forgot your password?</p>
                </Modal.Footer>
            </Modal>

            {/* Register Modal */}
            <Modal
                show={showRegister}
                onHide={handleRegisterClose}
                centered
                dialogClassName="modal-50w">
                <Modal.Header className="rm-bt-pd" closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control aria-describedby="passwordHelpBlock" placeholder="Password" />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="rm-tp-pd">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree to the Terms and Conditions" />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit" onClick={handleRegisterClose}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header;
