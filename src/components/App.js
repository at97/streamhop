import "../css/App.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import TVPage from "../pages/TVPage";
import dataContext from "../context/dataContext";

function App() {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTVSeries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/movies")
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
        fetch("http://localhost:5000/TV")
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

                    <Route path="/movies">
                        <MoviesPage />
                    </Route>

                    <Route path="/TV">
                        <TVPage />
                    </Route>
                </dataContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;
