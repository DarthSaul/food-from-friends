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
				<h1 className="mb-2">Curated food recs from friends</h1>
				<div>
					<p className="text-muted fw-light mb-1">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Sequi facere magni hic explicabo nemo quasi libero
						veritatis. Harum quasi voluptas,
					</p>
					{!isAuthenticated && !loading ? (
						<>
							<Link
								to="/register"
								className="btn btn-primary btn-round"
							>
								Sign Up
							</Link>
							<Link
								to="/login"
								className="btn btn-light btn-round"
							>
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
			<div className="landing-right">
				<img
					src="https://res.cloudinary.com/darthsaul/image/upload/v1632229754/Food-From-Friends/showcase_eenagj.jpg"
					alt=""
				/>
			</div>
		</>
	);
};

export default LandingHero;
