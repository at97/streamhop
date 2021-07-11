import { React, useContext } from "react";
import dataContext from "../context/dataContext"
import ObjectContainer from "../components/ObjectContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BrowsePage = () => {
    const { movies, tvSeries } = useContext(dataContext);
    return (
        <div>
            <Header />
            <ObjectContainer type={"Movies"} data={movies} />
            <ObjectContainer type={"TV Shows"} data={tvSeries} />
            <Footer />
        </div>
    )
}

export default BrowsePage;
