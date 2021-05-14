import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHamburger,
    faSignOutAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
    const {
        userObj: { isAuthenticated, loading },
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
                {!isAuthenticated && !loading ? (
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
                            <Link to='/dashboard'>
                                <FontAwesomeIcon icon={faUser} /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <a
                                href='#!'
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
