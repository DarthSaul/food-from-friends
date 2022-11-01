import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/About.css';

const About = () => {
	return (
		<div className="about-page">
			<div className="x-large text-primary mb-3">About</div>
			<div className="content mb-2">
				Have you ever found yourself in a new place and texting your
				friends for their list of recommendations and where to eat? Or
				perhaps you post the usual "recs?" on your various social media
				feeds? If the answer is yes, then{' '}
				<strong>Food From Friends</strong> was built for you. Here, you
				can explore curated lists of food recs from those your trust
				most for this information: Your friends.
			</div>
			<div className="content mb-2">
				This web application was built with love using a custom REST API
				on an Express server. React.js powers the frontend, along with a
				dense collection of CSS styles all coded from scratch.
			</div>
			<div className="content mb-1">
				Thanks for stopping by, and I hope you enjoy!
			</div>
			<div className="content mb-2">- Saul</div>
			<div className="about-page-links">
				<Link to="/" className="btn btn-primary mr-1">
					Return Home
				</Link>
				<a
					href="https://github.com/DarthSaul/food-from-friends"
					target="_blank"
					rel="noreferrer"
					className="btn btn-dark"
				>
					View Code
				</a>
			</div>
		</div>
	);
};

export default About;
