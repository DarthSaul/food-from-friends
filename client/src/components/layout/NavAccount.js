import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import { AlertContext } from '../../contexts/AlertContext';

const NavAccount = () => {
	const {
		userObj: { isAuthenticated, user, loading: userLoading },
		authError,
	} = useContext(UserContext);

	const { setAlert } = useContext(AlertContext);

	const history = useHistory();

	const logout = (event) => {
		event.preventDefault();
		authError();
		history.push('/');
		setAlert('You have logged out.', 'primary');
	};

	const userData = !userLoading && isAuthenticated ? user.data : null;
	console.log();

	return (
		<div className="account-actions p-1">
			<div className="mr">
				<img
					alt="account"
					src={
						userData.avatar
							? userData.avatar.thumbnail
							: 'https://res.cloudinary.com/darthsaul/image/upload/v1626367195/Coffee-Corner/no_image_wkgy3c.png'
					}
				/>
			</div>
			<div>
				<p>{userData.name}</p>
				<p className="text-muted-light">{userData.email}</p>
			</div>
			<div className="logout">
				<a href="#!" onClick={logout} style={{ cursor: 'pointer' }}>
					<FontAwesomeIcon icon={faSignOutAlt} />
				</a>
			</div>
		</div>
	);
};

export default NavAccount;
