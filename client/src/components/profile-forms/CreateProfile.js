import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

const CreateProfile = () => {
	const [formData, setFormData] = useState({
		location: '',
		bio: '',
		favoriteCuisines: '',
		favoriteDishes: '',
		instagram: '',
		twitter: '',
		facebook: '',
	});

	const { createProfile } = useContext(ProfileContext);

	const history = useHistory();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		createProfile(formData, history);
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
			<div className="fs-3 text-primary">Create Profile</div>
			<div className="text-muted fw-light">
				Let's get some information to make your profile stand out. Once
				finished, click <strong>Submit</strong>.
				<div>
					<small>* Required field</small>
				</div>
			</div>
			<hr className="my-1" />
			<form className="form" onSubmit={handleSubmit}>
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

export default CreateProfile;
