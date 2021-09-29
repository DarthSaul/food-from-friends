import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'capitalize';

const ProfileMedia = ({ media: { title, type, description } }) => {
    return (
        <div className='bg-grey p-3'>
            <h3 className='text-dark fs-2'>{title}</h3>
            <p>{capitalize(type)}</p>
            <p>
                <strong>Decription: </strong>
                {description}
            </p>
            <br />
        </div>
    );
};

ProfileMedia.propTypes = {
    media: PropTypes.object.isRequired
};

export default ProfileMedia;
