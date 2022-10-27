import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
	profile: {
		location,
		social,
		user: { name, avatar },
	},
}) => {
	return (
		<>
			<div className="banner"></div>
			<div className="middle-divider"></div>
			<div className="profile-info">
				<div className="showcase">
					<img src={avatar.medium} alt="avatar" />
					<div className="name">
						<div className="fs-3">{name}</div>
						<div>{location}</div>
					</div>
				</div>
				<div className="">
					<div className="btn btn-dark mt"> Action </div>
				</div>
			</div>

			{/* <img className='round-img my-1' src={avatar.medium} alt='' />
            <h1 className='large'>{name}</h1>
            <p className='lead'>Currently exploring {location}</p>
            <div className='icons my-1'>
                {social && social.instagram && (
                    <a
                        href={`https://www.instagram.com/${social.instagram}`}
                        target='_blank'
                        rel='noreferrer external'
                    >
                        <FontAwesomeIcon icon={faInstagram} size='3x' />
                    </a>
                )}
                {social && social.twitter && (
                    <a
                        href={`https://twitter.com/${social.twitter}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faTwitter} size='3x' />
                    </a>
                )}
                {social && social.facebook && (
                    <a
                        href={`https://www.facebook.com/${social.facebook}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faFacebook} size='3x' />
                    </a>
                )}
            </div> */}
		</>
	);
};

ProfileTop.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileTop;
