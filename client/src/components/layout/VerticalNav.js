import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import NavAccount from './NavAccount';
import '../../css/Navbar.css';

const VerticalNav = () => {
	const {
		userObj: { isAuthenticated },
	} = useContext(UserContext);
	return (
		<nav className="vert-nav">
			<div className="nav-inner bg-dark">
				<div className="p-1">
					<h1>Food</h1>
					<hr className="my-1" />
					<ul>
						<li>
							<NavLink to="/lists" activeClassName="selected">
								<FontAwesomeIcon
									icon={faHamburger}
									className="mr"
								/>{' '}
								Lists
							</NavLink>
						</li>
						<li>
							<NavLink to="/profiles" activeClassName="selected">
								<FontAwesomeIcon icon={faUser} className="mr" />{' '}
								Profiles
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard" activeClassName="selected">
								<FontAwesomeIcon icon={faHome} className="mr" />{' '}
								Dashboard
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					{isAuthenticated && (
						<>
							<hr />
							<NavAccount />
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default VerticalNav;
