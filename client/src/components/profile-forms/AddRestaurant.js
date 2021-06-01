import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

const AddRestaurant = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        rating: 1,
        review: ''
    });
    const { addRestaurant } = useContext(ProfileContext);
    const history = useHistory();

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        addRestaurant(formData, history);
    };

    const { name, location, rating, review } = formData;

    return (
        <>
            <h1 className='large text-primary'>Add a Favorite Restaurant</h1>
            <p className='lead'>
                <FontAwesomeIcon icon={faUtensils} /> Add a restaurant to your
                favorites
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Location'
                        name='location'
                        value={location}
                        onChange={handleChange}
                        required
                    />
                    <small className='form-text'>
                        City & state suggested (eg. Pittsburgh, PA)
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='number'
                        placeholder='Rating 1-10'
                        name='rating'
                        min={1}
                        max={10}
                        value={rating}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name='review'
                        cols='30'
                        rows='5'
                        placeholder='Review'
                        value={review}
                        onChange={handleChange}
                    />
                </div>

                <input type='submit' className='btn btn-primary my-1' />

                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </>
    );
};

export default AddRestaurant;
