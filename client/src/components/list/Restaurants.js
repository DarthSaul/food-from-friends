import React, { useState } from 'react';

const Restaurants = ({ list, user }) => {
	const [selectedRes, setRes] = useState(list[0]);

	const handleClick = (event) => {
		setRes(event);
	};

	const listClass = (res) => {
		if (selectedRes) {
			return res._id === selectedRes._id ? 'selected' : '';
		}
	};

	const name = user.split(' ')[0];

	return (
		<div className="restaurants">
			<div>
				<ul className="fs-1 mt">
					{list.map((res) => (
						<li
							key={res._id}
							onClick={(e) => handleClick(res)}
							className={listClass(res)}
						>
							<div className="mr-2">{res.name}</div>
							<div>{res.rating}</div>
						</li>
					))}
				</ul>
			</div>
			<div className="vertical-rule"></div>
			<div className="review p-1">
				<div className="text-dark lead mb">{name}'s review</div>
				<div className="fs-1 fw-light">
					{selectedRes && selectedRes.review}
				</div>
			</div>
		</div>
	);
};

export default Restaurants;
