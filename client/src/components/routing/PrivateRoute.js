import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { AlertContext } from '../../contexts/AlertContext';

const PrivateRoute = ({ children, ...rest }) => {
	const {
		userObj: { isAuthenticated, loading },
	} = useContext(UserContext);
	const { setAlert } = useContext(AlertContext);
	if (!loading && !isAuthenticated) {
		setAlert('You must be logged in to do that.', 'danger');
	}
	return (
		<Route {...rest}>
			{!isAuthenticated && !loading ? <Redirect to="/" /> : children}
		</Route>
	);
};

export default PrivateRoute;
