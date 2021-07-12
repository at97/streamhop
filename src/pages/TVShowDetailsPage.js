import { React, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TV_JSON } from "../constants";

const TVshowDetailsPage = () => {
    const { id } = useParams();
    const [TVshow, setTVshow] = useState([]);

    useEffect(() => {
        fetch(`${TV_JSON}/${id}`)
            .then((res) => {
                return res.json();
            })
            .then(json => {
                setTVshow(json);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    let imageUrl = `/images/${TVshow.backdrop_path}`;
    let setBackground = {
        backgroundImage: 'url(' + imageUrl + ')',
    };

    return (
        <div>
            <Header />
            <div style={setBackground} className="bottom-div"></div>
            <div className="top-div">
                <Card style={{ width: '25rem' }} className="custom-card mt-2 mb-2 ml-5">
                    <Card.Img variant="top" src={`/images/${TVshow.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{TVshow.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{TVshow.genre}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Language: {(TVshow.original_language === "en" ? "English" : "Japanese")}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">First air date: {TVshow.first_air_date}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Rating: {TVshow.vote_average} ({TVshow.vote_count} reviews)</Card.Subtitle>
                        <Card.Text>{TVshow.overview}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button className="w-100 mt-2 mb-2" variant="primary">Rent ${TVshow.rentalCost}</Button>
                        <Button className="w-100 mt-2 mb-2" variant="secondary">Buy ${TVshow.purchaseCost}</Button>
                    </Card.Footer>
                </Card>
            </div>
            <div className="top-div">
                <Footer />
            </div>
        </div>
    )
}

export default TVshowDetailsPage;
