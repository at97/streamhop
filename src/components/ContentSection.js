import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const ContentSection = (props) => {
    return (
        <Container fluid>
            <h2 className="ml-5 featured-text">Special Offer</h2>
            <Container fluid>
                <Row className="content-container">
                    <img src={`/images/${props.file}`} alt="streamhop promotion" />
                </Row>
            </Container>
        </Container>
    )
}

export default ContentSection;
