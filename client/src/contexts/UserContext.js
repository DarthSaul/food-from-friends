import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AlertContext } from './AlertContext';
import setAuthToken from '../utils/setAuthToken';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [userObj, setUser] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    });

    const { setAlert } = useContext(AlertContext);

    async function loadUser() {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth');
            setUser({
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                loading: false,
                user: res
            });
        } catch (err) {
            const errors = err.response.data.errors;
            authError(errors);
        }
    }

    async function login(email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ email, password });
        try {
            const res = await axios.post('/api/auth', body, config);
            localStorage.setItem('token', res.data.token);
            loadUser();
            setAlert('Welcome back!', 'success');
        } catch (err) {
            const errors = err.response.data.errors;
            authError(errors);
        }
    }

    async function register(name, email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ name, email, password });
        try {
            const res = await axios.post('/api/users', body, config);
            localStorage.setItem('token', res.data.token);
            loadUser();
            setAlert('You have successfully signed up!', 'success');
        } catch (err) {
            const errors = err.response.data.errors;
            authError(errors);
        }
    }

    function authError(errors) {
        localStorage.removeItem('token');
        setUser({
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
        });
        if (errors) {
            errors.forEach(error => setAlert(error.msg, 'danger'));
        }
    }

    return (
        <UserContext.Provider
            value={{
                userObj,
                register,
                authError,
                loadUser,
                login
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };