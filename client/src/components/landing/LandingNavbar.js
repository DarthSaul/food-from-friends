import React from 'react';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
	return (
		<nav className="landing-navbar">
			<h1>
				<Link to="/" className="text-dark">
					Food From Friends
				</Link>
			</h1>
			<ul>
				<li>Some</li>
				<li>Links</li>
				<li>Here</li>
			</ul>
		</nav>
	);
};

export default LandingNavbar;
