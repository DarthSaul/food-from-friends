import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import { ListsContext } from '../../contexts/ListsContext';

const ListForm = () => {
    const [restaurants, setRestaurants] = useState({
        city: '',
        isCitySet: false,
        restaurants: []
    });

    const [restaurant, setRestaurant] = useState({
        name: '',
        rating: 0,
        review: ''
    });

    const { createList } = useContext(ListsContext);

    const history = useHistory();

    const addRestaurant = e => {
        e.preventDefault();
        setRestaurants(prevState => ({
            ...prevState,
            restaurants: [
                ...prevState.restaurants,
                {
                    id: uuidv4(),
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

    const handleCitySubmit = e => {
        e.preventDefault();
        setRestaurants(state => ({
            ...state,
            isCitySet: true
        }));
    };

    const handleRemove = (e, id) => {
        e.preventDefault();
        setRestaurants(state => ({
            ...state,
            restaurants: state.restaurants.filter(el => el.id !== id)
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        createList(restaurants);
        history.push('/lists');
    };

    const { name, rating, review } = restaurant;
    const { city, isCitySet } = restaurants;

    return (
        <>
            <h1 className='large text-primary'>Create a List</h1>
            <div className='list-form'>
                {isCitySet ? (
                    <div className='my-2'>
                        <h4 className='lead'>Making a list for {city}.</h4>
                        <button
                            type='button'
                            className='btn btn-grey my'
                            onClick={() =>
                                setRestaurants(state => ({
                                    ...state,
                                    isCitySet: false
                                }))
                            }
                        >
                            Edit city
                        </button>
                    </div>
                ) : (
                    <>
                        <form className='form my-2' onSubmit={handleCitySubmit}>
                            <div>
                                <input
                                    type='text'
                                    placeholder='City'
                                    name='city'
                                    value={city}
                                    onChange={handleListChange}
                                    required
                                />
                                <small className='form-text'>
                                    City & state suggested (eg. Pittsburgh, PA)
                                </small>
                            </div>
                            <input
                                type='submit'
                                className='btn btn-light my-1'
                                value='Set city'
                            />
                        </form>
                    </>
                )}

                <div className='bg-primary p'>
                    <h3>
                        Provide some info about a restaurant below, then add it
                        to your list.
                    </h3>
                </div>
                <form className='form my-1' onSubmit={addRestaurant}>
                    <div>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={handleRestaurantsChange}
                            required
                        />
                        <small className='form-text'>
                            Example: Gaucho Parilla Argentina
                        </small>
                    </div>
                    <div className='my-1'>
                        Rating (1-10):{' '}
                        <input
                            type='number'
                            placeholder='Rating 1-10'
                            name='rating'
                            min={0}
                            max={10}
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
                        className='btn btn-primary my-1'
                        value='Add restaurant to list'
                    />
                </form>
                {restaurants.restaurants.length > 0 && (
                    <>
                        <h4>Restaurants on list:</h4>
                        <div className='form-restaurants-container'>
                            {restaurants.restaurants.map((res, ind) => (
                                <div
                                    key={ind}
                                    className='single-form-restaurant'
                                >
                                    <h4>{res.name}</h4>
                                    <p>{res.rating}</p>
                                    <button
                                        type='button'
                                        className='btn btn-danger'
                                        onClick={e => handleRemove(e, res.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <form className='form lead' onSubmit={handleSubmit}>
                    <input
                        type='submit'
                        className='btn btn-dark my-1'
                        value='Submit list'
                    />
                </form>
            </div>
        </>
    );
};

export default ListForm;
