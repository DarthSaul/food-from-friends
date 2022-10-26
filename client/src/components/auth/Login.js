import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

const Login = ({ signUp }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { login, userObj } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await login(email, password);
	};

	if (userObj.isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	const { email, password } = formData;

	return (
		<div>
			<div className="x-large text-primary">Sign In</div>
			<form className="form login-form" onSubmit={handleSubmit}>
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
				<div className="submit-login">
					<input
						type="submit"
						className="btn btn-primary"
						value="Sign in"
					/>
					<p>
						Don't have an account?{' '}
						<span
							className="text-primary cursor-pointer"
							onClick={(e) => signUp()}
						>
							Sign Up
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
