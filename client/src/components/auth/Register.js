import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AlertContext } from '../../contexts/AlertContext';
import { UserContext } from '../../contexts/UserContext';

const Register = ({ login }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { setAlert } = useContext(AlertContext);
	const { register, userObj } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register(name, email, password);
		}
	};

	if (userObj.isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	const { name, email, password, password2 } = formData;

	return (
		<div>
			<div className="x-large text-dark mb-1">Join Us</div>
			<form
				className="form register-form"
				onSubmit={handleSubmit}
			>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={handleChange}
					/>
				</div>
				<div className="submit-register">
					<input
						type="submit"
						className="btn btn-primary mr-1"
						value="Register"
					/>
					<p>
						Already have an account?{' '}
						<span
							className="text-primary cursor-pointer"
							onClick={(e) => login()}
						>
							Sign In
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Register;
