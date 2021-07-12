import { React, useContext } from "react";
import dataContext from "../context/dataContext"
// Import Carousel components
import Carousel from "react-bootstrap/Carousel";

const HeroCarousel = () => {
    const { movies, tvSeries } = useContext(dataContext);
    let heroImages = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].release_date.includes("2021")) {
            heroImages.push(movies[i]);
        }
    };
    for (let i = 0; i < tvSeries.length; i++) {
        if (tvSeries[i].first_air_date.includes("2021")) {
            heroImages.push(tvSeries[i]);
        }
    };

    return (
        <Carousel>
            {heroImages.map((image) => (
                <Carousel.Item key={image.id}>
                    <img
                        className=" hero-image d-block hero-banner"
                        src={`/images/${image.backdrop_path}`}
                        alt={`${image.title}`}
                    />
                    <Carousel.Caption>
                        <h1 className="outline right-align">{image.title}</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroCarousel;
