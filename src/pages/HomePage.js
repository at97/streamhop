import { React, useContext } from "react";
import dataContext from "../context/dataContext";
import FeaturedSection from "../components/FeaturedSection";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";

const HomePage = () => {
    const { movies, tvSeries } = useContext(dataContext);
    const featuredMovies = movies.filter(featuredMovie => featuredMovie.isFeatured === true);
    const featuredTVShows = tvSeries.filter(featuredShow => featuredShow.isFeatured === true);

    return (
        <div className="App">
            <Header />
            <HeroCarousel />
            <FeaturedSection type={"Films"} data={featuredMovies} />
            <FeaturedSection type={"TV Shows"} data={featuredTVShows} />
            <ContentSection file={"streamhop-promo.png"} />
            <Footer />
        </div>
    )
}

export default HomePage;
