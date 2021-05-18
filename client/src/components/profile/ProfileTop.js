import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const ProfileTop = ({
    profile: {
        location,
        social,
        user: { name, avatar }
    }
}) => {
    return (
        <div className='profile-top bg-primary p-2'>
            <img className='round-img my-1' src={avatar} alt='' />
            <h1 className='large'>{name}</h1>
            <p className='lead'>Currently exploring {location}</p>
            <div className='icons my-1'>
                {social && social.instagram && (
                    <a
                        href={social.instagram}
                        target='_blank'
                        rel='noreferrer external'
                    >
                        <FontAwesomeIcon icon={faInstagram} size='3x' />
                    </a>
                )}
                {social && social.twitter && (
                    <a
                        href={social.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faTwitter} size='3x' />
                    </a>
                )}
                {social && social.facebook && (
                    <a
                        href={social.facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faFacebook} size='3x' />
                    </a>
                )}
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;
