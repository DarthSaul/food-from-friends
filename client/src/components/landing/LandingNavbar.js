import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const LandingNavbar = () => {
	return (
		<nav className="landing-navbar">
			<h1>
				<a href="/" className="text-primary">
					<FontAwesomeIcon icon={faHamburger} size="2x" />
				</a>
			</h1>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<a
						href="https://github.com/DarthSaul/food-from-friends"
						target="_blank"
						rel="noreferrer"
					>
						View Code
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default LandingNavbar;
