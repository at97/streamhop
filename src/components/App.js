import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                {/* <Route path="/about">
                    <AboutUsPage />
                </Route> */}
            </Switch>
        </Router>
    );
}

export default App;
