import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const ManageAccount = () => {
	const { deleteAccount } = useContext(UserContext);
	const clickToDelete = async (event) => {
		deleteAccount();
	};

	return (
		<div>
			<button className="btn btn-danger" onClick={clickToDelete}>
				<FontAwesomeIcon icon={faUserMinus} className="mr" />
				Delete My Account
			</button>
		</div>
	);
};

export default ManageAccount;
