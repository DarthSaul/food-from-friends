import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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

	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	const {
		createProfile,
		getCurrentProfile,
		profileState: { profile, loading },
	} = useContext(ProfileContext);

	const history = useHistory();

	useEffect(() => {
		getCurrentProfile();
		setFormData({
			location: loading || !profile.location ? '' : profile.location,
			bio: loading || !profile.bio ? '' : profile.bio,
			favoriteCuisines:
				loading || !profile.favoriteCuisines
					? ''
					: profile.favoriteCuisines.join(', '),
			favoriteDishes:
				loading || !profile.favoriteDishes
					? ''
					: profile.favoriteDishes.join(', '),
			instagram:
				loading || !profile.social ? '' : profile.social.instagram,
			twitter: loading || !profile.social ? '' : profile.social.twitter,
			facebook: loading || !profile.social ? '' : profile.social.facebook,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	const toggle = () => {
		toggleSocialInputs((toggle) => !toggle);
	};

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
		<>
			<small>* = required field</small>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Location"
						name="location"
						value={location}
						onChange={handleChange}
						required
					/>
					<small className="form-text">
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Favorite cuisines"
						name="favoriteCuisines"
						value={favoriteCuisines}
						onChange={handleChange}
					/>
					<small className="form-text">
						Please use comma separated values (eg. Korean, Mexican,
						BBQ, Italian)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Favorite dishes"
						name="favoriteDishes"
						value={favoriteDishes}
						onChange={handleChange}
					/>
					<small className="form-text">
						Please use comma separated values (eg. Cacio e Pepe,
						Tacos, Fried Rice, Ramen)
					</small>
				</div>
				<div className="form-group">
					<textarea
						placeholder="* A short bio of yourself"
						name="bio"
						rows="6"
						value={bio}
						onChange={handleChange}
						required
					/>
					<small className="form-text">
						Tell us a little about yourself
					</small>
				</div>

				<div className="mt-2">
					<button
						type="button"
						className="btn btn-light"
						onClick={toggle}
					>
						Add Social Network Links
					</button>
					<span style={{ fontStyle: 'italic' }}>Optional</span>
				</div>
				{displaySocialInputs && (
					<div className="my-2">
						<div className="form-group social-input">
							<FontAwesomeIcon
								icon={faTwitter}
								size="2x"
								className="social-icons"
							/>
							<input
								type="text"
								placeholder="Twitter handle, eg. janedoe"
								name="twitter"
								value={twitter}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group social-input">
							<FontAwesomeIcon
								icon={faFacebook}
								size="2x"
								className="social-icons"
							/>
							<input
								type="text"
								placeholder="Facebook username, eg. janedoe"
								name="facebook"
								value={facebook}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group social-input">
							<FontAwesomeIcon
								icon={faInstagram}
								size="2x"
								className="social-icons"
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
				)}

				<input type="submit" className="btn btn-primary my-1" />
			</form>
		</>
	);
};

export default EditProfile;
