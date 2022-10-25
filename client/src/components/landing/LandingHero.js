import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const LandingHero = () => {
	const {
		userObj: { isAuthenticated, loading },
	} = useContext(UserContext);
	return (
		<>
			<div className="landing-left">
				<h1>Food From Friends</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Sequi facere magni hic explicabo nemo quasi libero
					veritatis. Harum quasi voluptas, consequuntur aliquid
					corrupti illo, facere quos maiores sunt accusantium tempora.
				</p>
				<div className="buttons">
					{!isAuthenticated && !loading ? (
						<>
							<Link to="/register" className="btn btn-primary">
								Sign Up
							</Link>
							<Link to="/login" className="btn btn-light">
								Login
							</Link>
						</>
					) : (
						<>
							<Link
								to="/dashboard"
								className="btn btn-lg btn-primary mt-1"
							>
								My Dashboard
							</Link>
						</>
					)}
				</div>
			</div>
			<div className="landing-right">Landing Page Image Will Go Here</div>
		</>
	);
};

export default LandingHero;
