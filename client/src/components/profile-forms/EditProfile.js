import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
	faTwitter,
	faFacebook,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

const EditProfile = () => {
	const [formData, setFormData] = useState({
		location: '',
		bio: '',
		favoriteCuisines: '',
		favoriteDishes: '',
		instagram: '',
		twitter: '',
		facebook: '',
	});

	const {
		createProfile,
		getCurrentProfile,
		profileState: { profile, loading },
	} = useContext(ProfileContext);

	const history = useHistory();

	useEffect(() => {
		getCurrentProfile();
		if (!loading) {
			setFormData({
				location: profile.location ? profile.location : '',
				bio: profile.bio ? profile.bio : '',
				favoriteCuisines: profile.favoriteCuisines
					? profile.favoriteCuisines.join(', ')
					: '',
				favoriteDishes: profile.favoriteDishes
					? profile.favoriteDishes.join(', ')
					: '',
				instagram:
					profile.social && profile.social.instagram
						? profile.social.instagram
						: '',
				twitter:
					profile.social && profile.social.twitter
						? profile.social.twitter
						: '',
				facebook:
					profile.social && profile.social.facebook
						? profile.social.facebook
						: '',
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		window.scrollTo(0, 0);
		createProfile(formData, history, true);
	};

	const {
		location,
		bio,
		favoriteCuisines,
		favoriteDishes,
		instagram,
		twitter,
		facebook,
	} = formData;

	return (
		<div className="dashboard-form">
			<div className="fs-3 text-primary">Edit Profile</div>
			<div className="text-muted fw-light">
				Make changes to your public profile. Once finished, click{' '}
				<strong>Submit</strong>.
				<div>
					<small>* Required field</small>
				</div>
			</div>
			<hr className="my-1" />
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<div>
						<div>Profile Image</div>
						<small className="form-text">
							Upload or Change Image
						</small>
					</div>
					<div>
						<Link to="/upload" className="btn btn-dark">
							<FontAwesomeIcon
								icon={faUserCircle}
								style={{
									marginRight: 2,
								}}
							/>{' '}
							Profile Image
						</Link>
					</div>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Location *</div>
						<small className="form-text">
							City & state suggested (eg. Boston, MA)
						</small>
					</div>
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={handleChange}
						required
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Favorite cuisines</div>
						<small className="form-text">
							Please use comma separated values (eg. Korean,
							Mexican, BBQ, Italian)
						</small>
					</div>
					<input
						type="text"
						placeholder="Favorite cuisines"
						name="favoriteCuisines"
						value={favoriteCuisines}
						onChange={handleChange}
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Favorite dishes</div>
						<small className="form-text">
							Please use comma separated values (eg. Cacio e Pepe,
							Tacos, Fried Rice, Ramen)
						</small>
					</div>
					<input
						type="text"
						placeholder="Favorite dishes"
						name="favoriteDishes"
						value={favoriteDishes}
						onChange={handleChange}
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Bio *</div>
						<small className="form-text">
							Tell us a little about yourself
						</small>
					</div>
					<textarea
						placeholder="A short bio of yourself"
						name="bio"
						rows="6"
						value={bio}
						onChange={handleChange}
						required
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Social</div>
						<small className="form-text">Optional</small>
					</div>

					<div className="social-input-container">
						<div className="social-input">
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
								className="social-icons twitter"
							/>
							<input
								type="text"
								placeholder="Twitter handle, eg. janedoe"
								name="twitter"
								value={twitter}
								onChange={handleChange}
							/>
						</div>

						<div className="social-input">
							<FontAwesomeIcon
								icon={faFacebook}
								size="2x"
								className="social-icons facebook"
							/>
							<input
								type="text"
								placeholder="Facebook username, eg. janedoe"
								name="facebook"
								value={facebook}
								onChange={handleChange}
							/>
						</div>

						<div className="social-input">
							<FontAwesomeIcon
								icon={faInstagram}
								size="2x"
								className="social-icons instagram"
							/>
							<input
								type="text"
								placeholder="Instagram handle, eg. janedoe"
								name="instagram"
								value={instagram}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				<hr className="my" />
				<div className="dashboard-submit">
					<input
						type="submit"
						className="btn btn-primary btn-lg my-1"
					/>
				</div>
			</form>
		</div>
	);
};

export default EditProfile;
