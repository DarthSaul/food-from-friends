import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ProfileContext } from '../../contexts/ProfileContext';

const Restaurants = ({ restaurants }) => {
    const { deleteRestaurant } = useContext(ProfileContext);

    const deleteOnClick = async (event, id) => {
        event.preventDefault();
        deleteRestaurant(id);
    };

    const restaurantList = restaurants.map(rest => (
        <tr key={rest._id}>
            <td>{rest.name}</td>
            <td className='hide-sm'>{rest.location}</td>
            <td className='hide-sm'>{rest.rating}</td>
            <td className='hide-sm'>{rest.review}</td>
            <td>
                <button
                    className='btn btn-danger'
                    onClick={e => deleteOnClick(e, rest._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ));
    return (
        <>
            <h2 className='my-2'>Favorite Restaurants</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className='hide-sm'>Location</th>
                        <th className='hide-sm'>Rating</th>
                        <th className='hide-sm'>Review</th>
                        <th className='hide-sm'>Actions</th>
                    </tr>
                </thead>
                <tbody>{restaurantList}</tbody>
            </table>
        </>
    );
};

Restaurants.propTypes = {
    restaurants: PropTypes.array.isRequired
};

export default Restaurants;
