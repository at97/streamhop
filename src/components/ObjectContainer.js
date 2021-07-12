import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";

const ObjectContainer = (props) => {
    // Check if container holds movies
    const isMovie = props.type === "Movies" ? true : false;

    return (
        <Container fluid>
            <h2 className="ml-5 featured-text">{props.type}</h2>
            <Container fluid>
                <Row xs={2} md={4} lg={6} className="item-poster-row">
                    {props.data.map((item) => (
                        <Col>
                            {/* Link to /movie if the container hold movies. Otherwise, link to /tv */}
                            <Link to={(isMovie ? `/movie/${item.id}` : `/tv/${item.id}`)}>
                                <img className="item-poster"
                                    src={`/images/${item.poster_path}`}
                                    alt={`${item.title}`}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default ObjectContainer;
