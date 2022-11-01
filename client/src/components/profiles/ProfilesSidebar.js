import React from 'react';

const ProfilesSidebar = () => {
	return (
		<>
			<div className="profiles-sidebar">
				<div className="sidebar-header lead text-primary">
					Actions 1
				</div>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</div>

			<div className="divider">
				<hr className="my-2" />
			</div>

			<div className="profiles-sidebar">
				<div className="sidebar-header lead text-primary">
					Actions 2
				</div>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</div>
		</>
	);
};

export default ProfilesSidebar;
