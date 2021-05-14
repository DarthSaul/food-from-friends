import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

import { UserContext } from './UserContext';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

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
                <Route exact path='/'>
                    <Landing />
                </Route>
                <section className='container'>
                    <Alert />
                    <Switch>
                        <Route exact path='/register'>
                            <Register />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                    </Switch>
                </section>
            </>
        </Router>
    );
};
export default App;
