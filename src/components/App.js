import "../css/App.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dataContext from "../context/dataContext";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage"
import MovieDetailsPage from "../pages/MovieDetailsPage";
import TVShowDetailsPage from "../pages/TVShowDetailsPage";

function App() {
    const [movies, setMovies] = useState([]);
    const [TV, setTV] = useState([]);
    // useEffect(() => {
    //     fetch(data)
    //         .then((res) => {
    //             return data.movies;
    //         })
    //         .then(json => {
    //             setMovies(json);
    //         })
    //         .catch((err) => {
    //             console.log(`Error: ${err}`);
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch(data)
    //         .then((res) => {
    //             return data.TV;
    //         })
    //         .then(json => {
    //             setTVSeries(json);
    //         })
    //         .catch((err) => {
    //             console.log(`Error: ${err}`);
    //         })
    // }, [])

    useEffect(() => {
        const fetchMovies = async () => {
            const movies_data = await fetch("https://streamhop.herokuapp.com/api/movies");
            const movies_json = await movies_data.json();
            setMovies(movies_json);
        }

        const fetchTVShows = async () => {
            const tvShows_data = await fetch("https://streamhop.herokuapp.com/api/TV");
            const tvShows_json = await tvShows_data.json();
            setTV(tvShows_json);
        }
        fetchMovies();
        fetchTVShows();
    }, []);

    return (
        <Router>
            <Switch>
                <dataContext.Provider value={{ movies, setMovies, TV, setTV }}>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route path="/browse">
                        <BrowsePage />
                    </Route>

                    <Route path="/movie/:id">
                        <MovieDetailsPage />
                    </Route>

                    <Route path="/tv/:id">
                        <TVShowDetailsPage />
                    </Route>
                </dataContext.Provider>
            </Switch>
        </Router >
    );
}

export default App;
