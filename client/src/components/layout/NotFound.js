import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import '../../css/NotFound.css';

const NotFound = () => {
	return (
		<div>
			<div className="text-primary not-found mb-2">
				<FontAwesomeIcon
					icon={faExclamationTriangle}
					size="2x"
					className="mr"
				/>
				<span className="large ">Page not found</span>
			</div>
			<div>
				<Link to="/" className="btn btn-dark mr">
					Return Home
				</Link>
				<Link to="/dashboard" className="btn btn-light">
					Dashboard
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
