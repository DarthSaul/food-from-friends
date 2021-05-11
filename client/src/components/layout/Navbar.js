import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <a href='index.html'>
                    <FontAwesomeIcon icon={faHamburger} /> Food from Friends
                </a>
            </h1>
            <ul>
                <li>
                    <a href='profiles.html'>Profiles</a>
                </li>
                <li>
                    <a href='register.html'>Register</a>
                </li>
                <li>
                    <a href='login.html'>Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
