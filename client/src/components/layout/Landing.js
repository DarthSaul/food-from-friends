import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

const Landing = () => {
    const {
        userObj: { isAuthenticated, loading }
    } = useContext(UserContext);
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Food From Friends</h1>
                    <p className='lead'>
                        Get a list of food recommendations, curated by those you
                        trust most &#8212; friends.
                    </p>
                    <div className='buttons'>
                        {!isAuthenticated && !loading ? (
                            <>
                                <Link
                                    to='/register'
                                    className='btn btn-primary'
                                >
                                    Sign Up
                                </Link>
                                <Link to='/login' className='btn btn-light'>
                                    Login
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/dashboard'
                                    className='btn btn-lg btn-primary mt-1'
                                >
                                    {/* <span className='fs-3'>My Dashboard</span> */}
                                    My Dashboard
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
