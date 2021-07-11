import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = (props) => {
    return (
        <footer className="bg-dark ">
            <Container>
                <Row className="center">
                    <h1 className="footer-brand-font ">streamhop</h1>
                </Row>
                <Row>
                    <Col>
                        123 Main St. <br />
                        Toronto ON <br />
                        M3A 3H9 <br />
                    </Col>
                    <Col>
                        <div className="center">
                            <SocialIcon network="twitter" className="social-icon" bgColor="#9896f1" />
                            <SocialIcon network="facebook" className="social-icon" bgColor="#9896f1" />
                            <SocialIcon network="youtube" className="social-icon" bgColor="#9896f1" />
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-links">
                            <Nav.Link className="footer-link" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="footer-link" as={Link} to="/browse">Browse</Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Row className="center">
                    <p class="text-muted mt-3">&copy; 2021 Ashwin Thottupurath</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
