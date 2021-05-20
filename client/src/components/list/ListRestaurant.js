import React from 'react';
import PropTypes from 'prop-types';

const ListRestaurant = ({ restaurant: { name, rating, review } }) => {
    return (
        <div className='list-restaurant bg-success my-1 p-1'>
            <div className='text-dark'>
                <h2>{name}</h2>
                <p>Rating: {rating}</p>
            </div>
            <p className='my text-dark'>{review}</p>
        </div>
    );
};

ListRestaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
};

export default ListRestaurant;
