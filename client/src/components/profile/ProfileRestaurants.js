import React from 'react';

const ProfileRestaurants = ({ restaurants }) => {
	return (
		<div className="profile-restaurants">
			<div className="large mb-1">Favorite Restaurants</div>
			{restaurants.length ? (
				restaurants.map((el) => (
					<div key={el._id} className="res-showcase bg-dark p-1 mb-1">
						<div className="info">
							<div className="fs-2 fw-bold mb">{el.name}</div>
							<div className="fw-light mb">{el.location}</div>
							<div className="">Rating: {el.rating}</div>
						</div>
						<div className="review">
							<div className="fs-2 mb">Review</div>
							<div className="fw-light">{el.review}</div>
						</div>
					</div>
				))
			) : (
				<div>User has no favorite restaurants yet.</div>
			)}
		</div>
	);
};

export default ProfileRestaurants;
