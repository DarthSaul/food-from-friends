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
        <div class='dash-buttons'>
            <Link href='/edit-profile' class='btn btn-light'>
                <FontAwesomeIcon icon={faUserCircle} /> Edit Profile
            </Link>
            <Link href='/add-restaurants' class='btn btn-light'>
                <FontAwesomeIcon icon={faPizzaSlice} /> Add Favorite Restaurants
            </Link>
            <Link href='/add-media' class='btn btn-light'>
                <FontAwesomeIcon icon={faBookmark} /> Add Favorite Media
            </Link>
        </div>
    );
};

export default DashboardActions;
