import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewBook from './Newbook';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/new-book">
                    <NewBook />
                </Route>
                <Route path="/">
                    <h1>I'm in Home</h1>
                </Route>
            </Switch>
        </Router >

    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
