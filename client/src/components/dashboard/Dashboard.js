import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import Spinner from '../layout/Spinner';
import EditProfile from '../profile-forms/EditProfile';
import Restaurants from './Restaurants';
import Media from './Media';
import ManageAccount from './ManageAccount';
import '../../css/Dashboard.css';

const Dashboard = () => {
	const [tabState, setTab] = useState({
		tab: 'profile',
	});

	const {
		profileState: { profile, loading: profileLoading },
		getCurrentProfile,
	} = useContext(ProfileContext);

	const {
		userObj: { user, loading: userLoading },
	} = useContext(UserContext);

	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const tabChange = (event) => {
		setTab({ tab: event });
	};

	const userData = !userLoading ? user.data : null;

	const { tab } = tabState;

	const tabs = [
		{ value: 'profile', label: 'Edit Profile' },
		{ value: 'restaurants', label: 'Favorite Restaurants' },
		{ value: 'media', label: 'Favorite Media' },
		{ value: 'manage', label: 'Manage Account' },
	];

	return (
		<>
			{profileLoading && profile === null ? (
				<Spinner />
			) : (
				<>
					<div className="dashboard-headline">
						<div className="mr-1">
							{userData.avatar && (
								<img
									className="my-1 dash-img"
									src={userData.avatar.url}
									alt="Avatar"
								/>
							)}
						</div>
						<div>
							<p className="fs-3 fw-bold">Dashboard</p>
							<p className="fw-light">
								{userData && userData.email}
							</p>
						</div>
					</div>

					{!profileLoading && profile !== null ? (
						<>
							<div className="dashboard-tabs">
								<ul>
									{tabs.map((el, ind) => (
										<li
											key={ind}
											className={
												tab === el.value
													? 'selected cursor-pointer'
													: 'cursor-pointer'
											}
											onClick={(e) => tabChange(el.value)}
										>
											{el.label}
										</li>
									))}
								</ul>
							</div>
							<hr className="my-1" />
							{tab === 'profile' && <EditProfile />}
							{tab === 'restaurants' && (
								<Restaurants
									restaurants={profile.favoriteRestaurants}
								/>
							)}
							{tab === 'media' && (
								<Media media={profile.favoriteMedia} />
							)}
							{tab === 'manage' && <ManageAccount />}
						</>
					) : (
						<>
							<p>
								You have not yet created a profile. You can
								create your profile at the link below:
							</p>
							<Link
								to="/create-profile"
								className="btn btn-primary my-1"
							>
								Create Profile
							</Link>
						</>
					)}
				</>
			)}
		</>
	);
};

export default Dashboard;
