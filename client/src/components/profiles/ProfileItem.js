import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		location,
		bio,
	},
}) => {
	const truncate = (text) => {
		if (text.length > 125) {
			return text.slice(0, 125) + '...';
		} else return text;
	};
	return (
		<div className="profile-item mb-2">
			<div className="profile-item-top p-1">
				<div className="profile-item-header">
					<div>
						<div className="lead">{name}</div>
						<div className="text-muted fs-1">{location}</div>
					</div>
					<div>
						<img src={avatar.url} alt="Avatar" />
					</div>
				</div>
				<div>
					<Link to={`/profile/${_id}`} className="btn btn-dark">
						<span className="fs-2">View Profile</span>
					</Link>
				</div>
			</div>
			<hr />
			<div className="profile-item-about p-1">
				<div className="text-muted">About</div>
				<div className="fs-1">{truncate(bio)}</div>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
