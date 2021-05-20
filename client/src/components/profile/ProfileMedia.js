import React from 'react';
import PropTypes from 'prop-types';

const ProfileMedia = ({ media: { title, type, description } }) => {
    return (
        <div className='bg-grey p'>
            <h3 className='text-dark'>{title}</h3>
            <p>{type}</p>
            <p>
                <strong>Decription: </strong>
                {description}
            </p>
        </div>
    );
};

ProfileMedia.propTypes = {
    media: PropTypes.object.isRequired
};

export default ProfileMedia;
