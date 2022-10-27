import React from 'react';

const ProfileAbout = ({ bio }) => {
	return (
		<div className="profile-about pr-3">
			<div className="large mb-1">Bio</div>
			<div className="bio">{bio}</div>
		</div>
	);
};

export default ProfileAbout;
