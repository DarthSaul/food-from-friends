import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../UserContext';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { login, userObj } = useContext(UserContext);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        await login(email, password);
    };

    if (userObj.isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    const { email, password } = formData;

    return (
        <>
            <h1 className='large text-success'>Sign In</h1>
            <p className='lead'>
                <FontAwesomeIcon icon={faUser} /> Sign in to your account
            </p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        minLength='6'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type='submit'
                    className='btn btn-success'
                    // value='Register'
                />
            </form>
            <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
        </>
    );
};

export default Login;
