import React from 'react';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Food from Friends</h1>
                    <p className='lead'>
                        Get a list of restaurant recommendations, curated by
                        your friends.
                    </p>
                    <div className='buttons'>
                        <a href='register.html' className='btn btn-primary'>
                            Sign Up
                        </a>
                        <a href='login.html' className='btn btn-light'>
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
