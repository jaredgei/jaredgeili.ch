import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default hot(module)(App);
