import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

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
					<img
						src={
							avatar
								? avatar.medium
								: 'https://res.cloudinary.com/darthsaul/image/upload/v1626367195/Coffee-Corner/no_image_wkgy3c.png'
						}
						alt="avatar"
					/>

					<div className="name">
						<div className="fs-3">{name}</div>
						<div className="fw-light">{location}</div>
						<div className="icons">
							{social && social.instagram && (
								<a
									href={`https://www.instagram.com/${social.instagram}`}
									target="_blank"
									rel="noreferrer external"
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							)}
							{social && social.twitter && (
								<a
									href={`https://twitter.com/${social.twitter}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							)}
							{social && social.facebook && (
								<a
									href={`https://www.facebook.com/${social.facebook}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							)}
						</div>
					</div>
				</div>
				<div className="">
					<div className="btn btn-light mt"> Action </div>
				</div>
			</div>
		</>
	);
};

ProfileTop.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileTop;
