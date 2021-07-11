import "../css/App.css";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";

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
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route path="/browse">
                    <BrowsePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
