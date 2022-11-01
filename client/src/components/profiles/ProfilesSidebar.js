import React from 'react';

const ProfilesSidebar = () => {
	return (
		<>
			<div className="profiles-sidebar">
				<div className="sidebar-header lead text-primary">
					Some Actions
				</div>
				<ul>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit</div>
						<div className="text-muted">Item 1</div>
					</li>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit </div>
						<div className="text-muted">Item 1</div>
					</li>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit </div>
						<div className="text-muted">Item 1</div>
					</li>
				</ul>
			</div>

			<div className="divider">
				<hr className="my-2" />
			</div>

			<div className="profiles-sidebar">
				<div className="sidebar-header lead text-primary">
					More Actions
				</div>
				<ul>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit</div>
						<div className="text-muted">Item 1</div>
					</li>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit </div>
						<div className="text-muted">Item 1</div>
					</li>
					<li>
						<div className="fs-1">Lorem ipsum dolor sit </div>
						<div className="text-muted">Item 1</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ProfilesSidebar;
