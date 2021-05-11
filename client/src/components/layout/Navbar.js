import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <FontAwesomeIcon icon={faHamburger} /> Food from Friends
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/profiles'>Profiles</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
