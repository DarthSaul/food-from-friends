import React from 'react';
// import PropTypes from 'prop-types';
// import capitalize from 'capitalize';

const ProfileMedia = ({ media }) => {
	return (
		<div className="profile-media">
			<div className="large mb-1">Media</div>
			<div className="media-showcase bg-dark p-1">
				<div className="info">
					<div className="fw-bold">Name of Media</div>
					<div className="fw-light">Location</div>
					<div className="fw-light">Rating: 5</div>
				</div>
				<div className="review">
					<div className="fw-bold">Desc</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur repellat, aliquam officiis sint corporis
						reprehenderit similique
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileMedia;
