import "../css/App.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dataContext from "../context/dataContext";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage"
import MovieDetailsPage from "../pages/MovieDetailsPage";
import TVShowDetailsPage from "../pages/TVShowDetailsPage";
import { MOVIES_JSON, TV_JSON } from "../constants";

function App() {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTVSeries] = useState([]);

    useEffect(() => {
        fetch(`${MOVIES_JSON}`)
            .then((res) => {
                return res.json();
            })
            .then(json => {
                setMovies(json);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    useEffect(() => {
        fetch(`${TV_JSON}`)
            .then((res) => {
                return res.json();
            })
            .then(json => {
                setTVSeries(json);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    return (
        <Router>
            <Switch>
                <dataContext.Provider value={{ movies, setMovies, tvSeries, setTVSeries }}>
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
