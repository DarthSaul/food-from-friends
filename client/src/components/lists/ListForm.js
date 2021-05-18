import React, { useContext, useState } from 'react';

import { ListsContext } from '../../contexts/ListsContext';

const ListForm = () => {
    const [restaurants, setRestaurants] = useState({
        city: '',
        restaurants: []
    });

    const [restaurant, setRestaurant] = useState({
        name: '',
        rating: 0,
        review: ''
    });

    const { createList } = useContext(ListsContext);

    const addRestaurant = e => {
        e.preventDefault();
        setRestaurants(prevState => ({
            ...prevState,
            restaurants: [
                ...prevState.restaurants,
                {
                    id: restaurants.restaurants.length,
                    name: restaurant.name,
                    rating: restaurant.rating,
                    review: restaurant.review
                }
            ]
        }));
        setRestaurant({ name: '', rating: 0, review: '' });
    };

    const handleRestaurantsChange = e => {
        const { name, value } = e.target;
        setRestaurant(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleListChange = e => {
        const { name, value } = e.target;
        setRestaurants(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        createList(restaurants);
    };

    const { name, rating, review } = restaurant;
    const { city } = restaurants;

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Say Something...</h3>
            </div>
            <form className='form my-1' onSubmit={addRestaurant}>
                <div>
                    <input
                        type='text'
                        placeholder='* Name'
                        name='name'
                        value={name}
                        onChange={handleRestaurantsChange}
                        required
                    />
                    <small className='form-text'>
                        City & state suggested (eg. Pittsburgh, PA)
                    </small>
                </div>
                <div>
                    <input
                        type='number'
                        placeholder='Rating 1-5'
                        name='rating'
                        min={0}
                        max={5}
                        value={rating}
                        onChange={handleRestaurantsChange}
                        required
                    />
                </div>
                <div>
                    <textarea
                        cols='30'
                        rows='5'
                        placeholder='Add a review'
                        name='review'
                        value={review}
                        onChange={handleRestaurantsChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    className='btn btn-dark my-1'
                    value='Submit'
                />
            </form>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='* City for list'
                        name='city'
                        value={city}
                        onChange={handleListChange}
                        required
                    />
                    <small className='form-text'>
                        City & state suggested (eg. Pittsburgh, PA)
                    </small>
                </div>
                <input type='submit' className='btn btn-primary my-1' />
            </form>
        </div>
    );
};

export default ListForm;
