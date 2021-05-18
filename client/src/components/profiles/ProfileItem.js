import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, name },
        location,
        bio,
        favoriteRestaurants
    }
}) => {
    return (
        <div className='profile bg-light'>
            <div>
                <h2>{name}</h2>
                <p>{location}</p>
                <p>{bio}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    View Profile
                </Link>
            </div>
            <div>
                <p>Favorite restaurants</p>
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
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
