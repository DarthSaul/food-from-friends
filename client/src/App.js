import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import './App.css';

const App = () => (
    <Router>
        <>
            <Navbar />
            <Route exact path='/'>
                <Landing />
            </Route>
        </>
    </Router>
);
export default App;
