import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../UserContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const {
//         userObj: { isAuthenticated, loading }
//     } = useContext(UserContext);
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 !isAuthenticated && !loading ? (
//                     <Redirect to='/login' />
//                 ) : (
//                     <Component {...props} />
//                 )
//             }
//         />
//     );
// };

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
