import React from 'react';
// import PropTypes from 'prop-types';
import capitalize from 'capitalize';

const ProfileMedia = ({ media }) => {
	return (
		<div className="profile-media">
			<div className="large mb-1">Media</div>
			{media.length ? (
				media.map((el) => (
					<div
						key={el._id}
						className="media-showcase bg-dark p-1 mb-1"
					>
						<div className="info">
							<div className="fw-bold">{el.title}</div>
							<div className="fw-light">
								{capitalize(el.type)}
							</div>
						</div>
						<div className="review">
							<div className="fw-bold">Description</div>
							<div>{el.description}</div>
						</div>
					</div>
				))
			) : (
				<div>User has no favorite media yet.</div>
			)}
		</div>
	);
};

export default ProfileMedia;
