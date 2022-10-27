import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		location,
		bio,
		favoriteRestaurants,
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
		// <div className='profile-item bg-light'>
		//     <img src={avatar.url} alt='' />
		//     <div className='profile-item-top'>
		//         <h2>{name}</h2>
		//         <p>{location}</p>
		//     </div>
		//     <div className='profiles-content'>
		//         <div className='bio'>
		//             <p className='fav-res'>About</p>
		//             <p>{bio}</p>
		//         </div>
		//         <div>
		//             <p className='fav-res'>Favorites</p>
		//             <ul>
		//                 {favoriteRestaurants.map((el, ind) => {
		//                     return (
		//                         <li key={ind} className='text-primary'>
		//                             {el.name}
		//                         </li>
		//                     );
		//                 })}
		//             </ul>
		//         </div>
		//     </div>
		//     <Link to={`/profile/${_id}`} className='btn btn-primary mt-2'>
		//         <span className='fs-2'>View Profile</span>
		//     </Link>
		// </div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
