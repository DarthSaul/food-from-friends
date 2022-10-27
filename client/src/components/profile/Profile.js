import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { ProfileContext } from '../../contexts/ProfileContext';
import ProfileTop from './ProfileTop';
import ProfileRestaurants from './ProfileRestaurants';
import ProfileCuisines from './ProfileCuisines';
import ProfileMedia from './ProfileMedia';
import ProfileAbout from './ProfileAbout';
import Sidebar from './Sidebar';

const Profile = () => {
	const [tab, setTab] = useState('restaurants');

	const {
		getProfileById,
		profileState: { profile, loading },
	} = useContext(ProfileContext);

	const { id } = useParams();

	useEffect(() => {
		getProfileById(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const tabs = [
		{ label: 'Restaurants', value: 'restaurants' },
		{ label: 'Cuisines', value: 'cuisines' },
		{ label: 'Media', value: 'media' },
		{ label: 'Bio', value: 'bio' },
	];

	return (
		<>
			{profile === null || loading ? (
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
							<Link to="/profiles" className="btn btn-dark">
								Back to profiles
							</Link>
						</div>
					</div>
					<hr className="mb-2" />
					<div className="profile-grid my-1">
						<div className="profile-top bg-primary">
							<ProfileTop profile={profile} />
						</div>
						<div className="profile-divider"></div>
						<div className="sidebar">
							<Sidebar />
						</div>
						<div className="tabs">
							{/* Create component, pass setTab down as prop */}
							<ul>
								{tabs.map((el, ind) => (
									<li
										key={ind}
										className={
											tab === el.value
												? 'selected cursor-pointer'
												: 'cursor-pointer'
										}
										onClick={(e) => setTab(el.value)}
									>
										{el.label}
									</li>
								))}
							</ul>
							<hr />
						</div>
						<div className="view">
							{tab === 'restaurants' && (
								<ProfileRestaurants
									restaurants={profile.favoriteRestaurants}
								/>
							)}
							{tab === 'cuisines' && (
								<ProfileCuisines
									cuisines={profile.favoriteCuisines}
								/>
							)}
							{tab === 'media' && (
								<ProfileMedia media={profile.favoriteMedia} />
							)}
							{tab === 'bio' && (
								<ProfileAbout bio={profile.bio} />
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
