import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        location,
        bio,
        favoriteRestaurants
    }
}) => {
    return (
        <div className='profile-item bg-light'>
            <img src={avatar.url} alt='' />
            <div className='profile-item-top'>
                <h2>{name}</h2>
                <p>{location}</p>
            </div>
            <div className='profiles-content'>
                <div className='bio'>
                    <p className='fav-res'>About</p>
                    <p>{bio}</p>
                </div>
                <div>
                    <p className='fav-res'>Favorites</p>
                    <ul>
                        {favoriteRestaurants.map((el, ind) => {
                            return (
                                <li key={ind} className='text-primary'>
                                    {el.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <Link to={`/profile/${_id}`} className='btn btn-primary mt-2'>
                <span className='fs-2'>View Profile</span>
            </Link>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
