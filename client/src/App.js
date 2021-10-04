import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => (
    <Router>
        <>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route>
                    <Routes />
                </Route>
            </Switch>
            <Footer />
        </>
    </Router>
);

export default App;
