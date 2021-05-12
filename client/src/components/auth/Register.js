import React, { useState } from 'react';
// import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log('SUCCESS');
            // const newUser = {
            //     name,
            //     email,
            //     password
            // };
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     };
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
        }
    };

    const { name, email, password, password2 } = formData;

    return (
        <>
            <h1 className='large text-success'>Sign Up</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Create Your Account
            </p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <small className='form-text'>
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                    </small>
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
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        minLength='6'
                        value={password2}
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
                Already have an account? <a href='login.html'>Sign In</a>
            </p>
        </>
    );
};

export default Register;
