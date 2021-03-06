import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        location: '',
        bio: '',
        favoriteCuisines: '',
        favoriteDishes: '',
        instagram: '',
        twitter: '',
        facebook: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const { createProfile } = useContext(ProfileContext);

    const history = useHistory();

    const toggle = () => {
        toggleSocialInputs(toggle => !toggle);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        createProfile(formData, history);
    };

    const {
        location,
        bio,
        favoriteCuisines,
        favoriteDishes,
        instagram,
        twitter,
        facebook
    } = formData;

    return (
        <>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
                <FontAwesomeIcon icon={faUser} /> Let's get some information to
                make your profile stand out
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={handleSubmit}>
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
                        type='text'
                        placeholder='Favorite cuisines'
                        name='favoriteCuisines'
                        value={favoriteCuisines}
                        onChange={handleChange}
                    />
                    <small className='form-text'>
                        Please use comma separated values (eg. Korean, Mexican,
                        BBQ, Italian)
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Favorite dishes'
                        name='favoriteDishes'
                        value={favoriteDishes}
                        onChange={handleChange}
                    />
                    <small className='form-text'>
                        Please use comma separated values (eg. Cacio e Pepe,
                        Tacos, Fried Rice, Ramen)
                    </small>
                </div>
                <div className='form-group'>
                    <textarea
                        placeholder='* A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={handleChange}
                        required
                    />
                    <small className='form-text'>
                        Tell us a little about yourself
                    </small>
                </div>

                <div className='my-2'>
                    <button
                        type='button'
                        className='btn btn-light'
                        onClick={toggle}
                    >
                        Add Social Network Links
                    </button>
                    <span style={{ fontStyle: 'italic' }}>Optional</span>
                </div>
                {displaySocialInputs && (
                    <>
                        <div className='form-group social-input'>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                size='2x'
                                className='social-icons'
                            />
                            <input
                                type='text'
                                placeholder='Twitter handle, eg. janedoe'
                                name='twitter'
                                value={twitter}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size='2x'
                                className='social-icons'
                            />
                            <input
                                type='text'
                                placeholder='Facebook username, eg. janedoe'
                                name='facebook'
                                value={facebook}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-group social-input'>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size='2x'
                                className='social-icons'
                            />
                            <input
                                type='text'
                                placeholder='Instagram handle, eg. janedoe'
                                name='instagram'
                                value={instagram}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                <input type='submit' className='btn btn-primary my-1' />

                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </>
    );
};

export default CreateProfile;
