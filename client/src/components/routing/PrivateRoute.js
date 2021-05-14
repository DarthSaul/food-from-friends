import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const PrivateRoute = ({ children, ...rest }) => {
    const {
        userObj: { isAuthenticated, loading }
    } = useContext(UserContext);
    return (
        <Route {...rest}>
            {!isAuthenticated && !loading ? <Redirect to='/login' /> : children}
        </Route>
    );
};

export default PrivateRoute;
