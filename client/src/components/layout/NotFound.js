import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div>
            <h1 className='x-large text-primary'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Page Not Found
            </h1>
            <p className='large'>Sorry, that page does not exist.</p>
        </div>
    );
};

export default NotFound;
