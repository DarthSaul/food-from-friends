import React from 'react';
import PropTypes from 'prop-types';

const ListRestaurant = ({ restaurant: { name, rating, review } }) => {
    return (
        <div className='list-restaurant bg-success my-1 p-2'>
            <div className='text-black'>
                <h2>{name}</h2>
                <p className='text-dark'>Rating: {rating}</p>
            </div>
            <p className='text-black'>{review}</p>
        </div>
    );
};

ListRestaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
};

export default ListRestaurant;
