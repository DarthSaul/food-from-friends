import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Register from '../auth/Register';
import Login from '../auth/Login';

const LandingHero = () => {
	const [tabState, setTab] = useState({
		tab: 'main',
	});
	const {
		userObj: { isAuthenticated, loading },
	} = useContext(UserContext);

	const signUp = (event) => {
		setTab({ tab: 'register' });
	};
	const login = (event) => {
		setTab({ tab: 'login' });
	};

	const { tab } = tabState;

	return (
		<>
			<div className="landing-left">
				{tab === 'main' && (
					<>
						<h1 className="mb-2">Curated food recs from friends</h1>
						<div>
							<p className="text-muted fw-light mb-1">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Sequi facere magni hic
								explicabo nemo quasi libero veritatis. Harum
								quasi voluptas,
							</p>
							{!isAuthenticated && !loading ? (
								<>
									<div
										className="btn btn-primary btn-round"
										onClick={signUp}
									>
										Sign Up
									</div>
									<div
										className="btn btn-light btn-round"
										onClick={login}
									>
										Login
									</div>
								</>
							) : (
								<>
									<Link
										to="/dashboard"
										className="btn btn-primary mt-1"
									>
										My Dashboard
									</Link>
								</>
							)}
						</div>
					</>
				)}
				{tab === 'register' && <Register login={login} />}
				{tab === 'login' && <Login signUp={signUp} />}
			</div>
			<div className="landing-right">
				<img
					src="https://res.cloudinary.com/darthsaul/image/upload/v1632229754/Food-From-Friends/showcase_eenagj.jpg"
					alt="Landing"
					className="mt-1"
				/>
			</div>
		</>
	);
};

export default LandingHero;
