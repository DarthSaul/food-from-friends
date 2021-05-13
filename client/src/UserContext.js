import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AlertContext } from './AlertContext';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [userObj, setUser] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    });

    const { setAlert } = useContext(AlertContext);

    async function register(name, email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ name, email, password });
        try {
            const res = await axios.post('/api/users', body, config);
            registerSuccess(res.data.token);
            setAlert('You have successfully signed up!', 'success');
        } catch (err) {
            const errors = err.response.data.errors;
            registerFail(errors);
        }
    }

    function registerSuccess(token) {
        localStorage.setItem('token', token);
        setUser(prevState => ({
            ...prevState,
            token: localStorage.getItem('token'),
            isAuthenticated: true,
            loading: false
        }));
    }

    function registerFail(errors) {
        localStorage.removeItem('token');
        setUser(prevState => ({
            ...prevState,
            token: null,
            isAuthenticated: false,
            loading: false
        }));
        if (errors) {
            errors.forEach(error => setAlert(error.msg, 'danger'));
        }
    }

    return (
        <UserContext.Provider
            value={{ userObj, register, registerSuccess, registerFail }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };
