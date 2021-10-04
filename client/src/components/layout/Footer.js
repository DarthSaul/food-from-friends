import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-row'>
                <div className='copyright-text'>&copy; 2021, Saul Graves</div>
                <a
                    href='https://github.com/DarthSaul/food-from-friends'
                    target='_blank'
                    rel='noreferrer'
                    className='view-code'
                >
                    <FontAwesomeIcon icon={faGithub} className='git-icon' />
                    <span className='git-text'>View the Code</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
