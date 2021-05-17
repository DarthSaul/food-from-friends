import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

const AddMedia = () => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: ''
    });
    const { updateMedia } = useContext(ProfileContext);
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
        updateMedia('add', formData, history);
    };

    const { title, type, description } = formData;

    return (
        <>
            <h1 className='large text-primary'>Add Media</h1>
            <p className='lead'>
                <FontAwesomeIcon icon={faBookmark} /> Add something to your
                favorite media
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Title'
                        name='title'
                        value={title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <select
                        name='type'
                        value={type}
                        onChange={handleChange}
                        required
                    >
                        <option>* Select a type</option>
                        <option value='movie'>Movie</option>
                        <option value='series'>Television Series</option>
                        <option value='show'>Standalone Show</option>
                        <option value='book'>Book</option>
                        <option value='newspaper'>Newspaper</option>
                        <option value='magazine'>Magazine</option>
                        <option value='column'>Column</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='* Description'
                        value={description}
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

export default AddMedia;
