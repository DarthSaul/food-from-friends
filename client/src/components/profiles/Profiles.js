import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ProfileContext } from '../../contexts/ProfileContext';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import '../../css/Profiles.css';
import ProfilesSidebar from './ProfilesSidebar';

const Profiles = () => {
	const {
		getAllProfiles,
		profileState: { profiles, loading },
	} = useContext(ProfileContext);

	useEffect(() => {
		getAllProfiles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<div className="profiles-header mb-1">
						<div>
							<h1 className="large text-primary">Community</h1>
							<p className="fw-light fs-1">
								Check out community members favorites.
							</p>
						</div>
						<div>
							<Link to="/dashboard" className="btn btn-dark">
								Dashboard
							</Link>
						</div>
					</div>

					<hr className="mb-2" />

					<div className="profiles">
						<div className="profiles-list">
							{profiles.length > 0 ? (
								profiles.map((el) => (
									<ProfileItem key={el._id} profile={el} />
								))
							) : (
								<h2 className="text-dark">
									No profiles found.
								</h2>
							)}
						</div>
						<div className="profiles-sidebar-wrapper">
							<ProfilesSidebar />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Profiles;
