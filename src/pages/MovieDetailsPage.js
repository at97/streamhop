import { React, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MOVIES_JSON } from "../constants";

const DetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`${MOVIES_JSON}/${id}`)
            .then((res) => {
                return res.json();
            })
            .then(json => {
                setMovie(json);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    let imageUrl = `/images/${movie.backdrop_path}`;
    let setBackground = {
        backgroundImage: 'url(' + imageUrl + ')',
    };

    return (
        <div>
            <Header />
            <div style={setBackground} className="bottom-div"></div>
            <div className="top-div">
                <Card style={{ width: '18rem' }} className="custom-card mt-2 mb-2 ml-5">
                    <Card.Img variant="top" src={`/images/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Release: {movie.release_date}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Rating: {movie.vote_average} ({movie.vote_count} reviews)</Card.Subtitle>
                        <Card.Text>{movie.overview}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button className="w-100 mt-2 mb-2" variant="primary">Rent ${movie.rentalCost}</Button>
                        <Button className="w-100 mt-2 mb-2" variant="secondary">Buy ${movie.purchaseCost}</Button>
                    </Card.Footer>
                </Card>
            </div>
            <div className="top-div">
                <Footer />
            </div>
        </div>
    )
}

export default DetailsPage;
