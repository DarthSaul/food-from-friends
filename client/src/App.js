import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

import { UserContext } from './contexts/UserContext';

import './App.css';

const App = () => {
    const { loadUser } = useContext(UserContext);
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
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
            </>
        </Router>
    );
};
export default App;
