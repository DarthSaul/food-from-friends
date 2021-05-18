import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddRestaurant from './components/profile-forms/AddRestaurant';
import AddMedia from './components/profile-forms/AddMedia';
import Lists from './components/lists/Lists';
import List from './components/list/List';

import PrivateRoute from './components/routing/PrivateRoute';

import { UserContext } from './contexts/UserContext';
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
                        {/* Public Routes */}
                        <Route exact path='/register'>
                            <Register />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/profiles'>
                            <Profiles />
                        </Route>
                        <Route exact path='/profile/:id'>
                            <Profile />
                        </Route>
                        <Route exact path='/lists'>
                            <Lists />
                        </Route>
                        <Route exact path='/lists/:id'>
                            <List />
                        </Route>
                        {/* Private Routes */}
                        <PrivateRoute exact path='/dashboard'>
                            <Dashboard />
                        </PrivateRoute>
                        <PrivateRoute exact path='/create-profile'>
                            <CreateProfile />
                        </PrivateRoute>
                        <PrivateRoute exact path='/edit-profile'>
                            <EditProfile />
                        </PrivateRoute>
                        <PrivateRoute exact path='/add-restaurant'>
                            <AddRestaurant />
                        </PrivateRoute>
                        <PrivateRoute exact path='/add-media'>
                            <AddMedia />
                        </PrivateRoute>
                    </Switch>
                </section>
            </>
        </Router>
    );
};
export default App;
