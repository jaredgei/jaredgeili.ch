import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Home from './Home';

class App extends Component {
    render() {
        return (
            <ParallaxProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </ParallaxProvider>
        );
    }
}

export default hot(module)(App);
