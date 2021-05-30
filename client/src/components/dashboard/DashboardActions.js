import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faPizzaSlice,
    faBookmark
} from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
    return (
        <div className='dash-buttons'>
            <Link to='/edit-profile' className='btn btn-primary'>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ marginRight: 2 }}
                />{' '}
                Edit Profile
            </Link>
            <Link to='/add-restaurant' className='btn btn-primary'>
                <FontAwesomeIcon
                    icon={faPizzaSlice}
                    style={{ marginRight: 2 }}
                />{' '}
                Add a Favorite Restaurant
            </Link>
            <Link to='/add-media' className='btn btn-primary'>
                <FontAwesomeIcon icon={faBookmark} style={{ marginRight: 2 }} />{' '}
                Add Favorite Media
            </Link>
        </div>
    );
};

export default DashboardActions;
