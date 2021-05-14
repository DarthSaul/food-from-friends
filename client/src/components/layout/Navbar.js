import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../UserContext';

const Navbar = () => {
    const {
        userObj: { isAuthenticated },
        authError
    } = useContext(UserContext);
    const handleClick = event => {
        authError();
    };
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <FontAwesomeIcon icon={faHamburger} /> Food From Friends
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/profiles'>Profiles</Link>
                </li>
                {!isAuthenticated ? (
                    <>
                        <li>
                            <Link to='/register'>Sign Up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <a
                                href='#!'
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                            >
                                Logout
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
