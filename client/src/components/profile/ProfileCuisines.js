import React from 'react';

const ProfileCuisines = ({ cuisines }) => {
	return (
		<div className="profile-cuisines">
			<div className="large mb-1">Cuisines</div>
			<div className="cuisines-container">
				{cuisines.length ? (
					cuisines.map((el, ind) => (
						<div key={ind} className="bg-dark p-1 mr-1">
							{el}
						</div>
					))
				) : (
					<div>User has no favorite cuisines yet.</div>
				)}
			</div>
		</div>
	);
};

export default ProfileCuisines;
