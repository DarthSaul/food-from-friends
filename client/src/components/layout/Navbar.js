import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHamburger,
    faSignOutAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';
import { AlertContext } from '../../contexts/AlertContext';

const Navbar = () => {
    const {
        userObj: { isAuthenticated, loading },
        authError
    } = useContext(UserContext);

    const { setAlert } = useContext(AlertContext);

    const history = useHistory();

    const handleClick = event => {
        event.preventDefault();
        authError();
        history.push('/login');
        setAlert('You have logged out.', 'danger');
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
                <li>
                    <Link to='/lists'>Lists</Link>
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
                                <FontAwesomeIcon icon={faUser} />{' '}
                                <span className='hide-sm'>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href='#!'
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} />{' '}
                                <span className='hide-sm'>Logout</span>
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
