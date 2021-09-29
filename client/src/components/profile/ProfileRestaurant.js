import React from 'react';
import PropTypes from 'prop-types';

const ProfileRestaurant = ({ res: { name, location, rating, review } }) => {
    return (
        <div className='bg-grey p-3'>
            <h3 className='text-dark fs-2'>{name}</h3>
            <p>{location}</p>
            <p>
                <strong>Rating: </strong>
                {rating}
            </p>
            <p>
                <strong>Review: </strong>
                {review}
            </p>
            <br />
        </div>
    );
};

ProfileRestaurant.propTypes = {
    res: PropTypes.object.isRequired
};

export default ProfileRestaurant;
