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
            <Link to='/edit-profile' className='btn btn-light'>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ marginRight: 2 }}
                />{' '}
                Edit Profile
            </Link>
            <Link to='/upload' className='btn btn-light'>
                <FontAwesomeIcon
                    icon={faUserCircle}
                    style={{ marginRight: 2 }}
                />{' '}
                Upload Profile Image
            </Link>
            <Link to='/add-restaurant' className='btn btn-light'>
                <FontAwesomeIcon
                    icon={faPizzaSlice}
                    style={{ marginRight: 2 }}
                />{' '}
                Add a Favorite Restaurant
            </Link>
            <Link to='/add-media' className='btn btn-light'>
                <FontAwesomeIcon icon={faBookmark} style={{ marginRight: 2 }} />{' '}
                Add Favorite Media
            </Link>
        </div>
    );
};

export default DashboardActions;
