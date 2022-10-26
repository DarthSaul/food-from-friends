import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import EditProfile from '../profile-forms/EditProfile';
import Restaurants from './Restaurants';
import Media from './Media';
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
		deleteAccount,
	} = useContext(UserContext);

	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const clickToDelete = async (event) => {
		deleteAccount();
	};

	const tabChange = (event) => {
		setTab({ tab: event });
	};

	const userData = !userLoading ? user.data : null;

	const { tab } = tabState;
	const tabs = [
		{ value: 'profile', label: 'Edit Profile' },
		{ value: 'restaurants', label: 'Favorite Restaurants' },
		{ value: 'media', label: 'Favorite Media' },
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
							{/* <DashboardActions /> */}
							{tab === 'profile' && (
								<div>
									<div className="profile-actions mb-1">
										<Link
											to="/upload"
											className="btn btn-light"
										>
											<FontAwesomeIcon
												icon={faUserCircle}
												style={{ marginRight: 2 }}
											/>{' '}
											Upload or Change Profile Image
										</Link>
										<button
											className="btn btn-danger"
											onClick={clickToDelete}
										>
											<FontAwesomeIcon
												icon={faUserMinus}
											/>{' '}
											Delete My Account
										</button>
									</div>
									<div className="fs-3 text-primary">
										Edit Profile
									</div>
									<EditProfile />
								</div>
							)}
							{tab === 'restaurants' && (
								<Restaurants
									restaurants={profile.favoriteRestaurants}
								/>
							)}
							{tab === 'media' && (
								<Media media={profile.favoriteMedia} />
							)}
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
