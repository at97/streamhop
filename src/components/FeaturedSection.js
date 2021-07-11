import { React, useContext } from "react";
import dataContext from "../context/dataContext";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FeaturedSection = (props) => {
    return (
        <Container fluid>
            <h2 className="ml-5 featured-text">Featured {props.type}</h2>
            <Container fluid>
                <Row xs={2} md={4} lg={6} className="item-poster-row">
                    {props.data.map((item) => (
                        <Col>
                            <img className="item-poster"
                                src={`/images/${item.poster_path}`}
                                alt={`${item.title}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default FeaturedSection;
