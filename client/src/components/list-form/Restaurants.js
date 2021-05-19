import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Restaurants = ({ restaurants }) => {
    const restaurantComponents = restaurants.map((res, ind) => (
        <div key={ind}>
            <h4>{res.name}</h4>
            <p>{res.rating}</p>
            <button
                type='button'
                className='btn btn-light'
                onClick={e => handleRemove(e, res.id)}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    ));
    const handleRemove = (e, id) => {
        console.log(id);
        restaurants.filter(el => el.id !== id);
    };
    return <>{restaurantComponents}</>;
};

export default Restaurants;
