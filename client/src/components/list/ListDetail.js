import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ListDetail = ({ list }) => {
	const {
		city,
		user: { name, avatar, _id: user_id },
	} = list;

	return (
		<div className="list-detail">
			<div className="list-detail-highlight">
				<div>
					<div className="lead">{city}</div>
				</div>
				<div className="fw-light">Some text can go here</div>
			</div>
			<div className="list-detail-highlight">
				<div className="user-detail">
					<div className="lead">{name}</div>

					<div>
						<img src={avatar.url} alt="" />
					</div>
				</div>

				<div className="fw-light">
					<span className="mr">View profile</span>

					<Link
						to={`/profile/${user_id}`}
						className="list-profile-link"
					>
						<FontAwesomeIcon icon={faUserCircle} size="lg" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ListDetail;
