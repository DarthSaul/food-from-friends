import React from 'react';

const ProfileAbout = ({ bio }) => {
	console.log(bio);
	return (
		<div className="profile-about pr-3">
			<div className="large">Bio</div>
			<div>{bio}</div>
		</div>
	);
};

export default ProfileAbout;
