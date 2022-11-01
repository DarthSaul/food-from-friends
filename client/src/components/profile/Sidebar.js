import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUserClock } from '@fortawesome/free-solid-svg-icons';

const sidebar = () => {
	const sidebarItems = [
		{ text: 'Recent activity one.', date: '1 day ago' },
		{ text: 'Recent activity two.', date: '2 days ago' },
		{ text: 'Recent activity three.', date: '3 days ago' },
	];
	return (
		<div>
			<div className="sidebar-top mb-1">
				<div className="fs-2 text-dark">Recent Activity</div>
				<div>
					<FontAwesomeIcon
						icon={faEllipsisH}
						className="cursor-pointer"
					/>
				</div>
			</div>

			<ul className="sidebar-items">
				{sidebarItems.map((el, ind) => (
					<li key={ind} className="mb-1 p-1">
						<div className="mr-1 icon">
							<FontAwesomeIcon icon={faUserClock} />
						</div>
						<div>
							<div className="fw-bold">{el.text}</div>
							<div className="text-muted">{el.date}</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default sidebar;
