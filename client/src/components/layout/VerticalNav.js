import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHamburger,
	faUser,
	faHome,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import NavAccount from './NavAccount';
import '../../css/Navbar.css';

const VerticalNav = ({ navState, toggleNav }) => {
	const {
		userObj: { isAuthenticated },
	} = useContext(UserContext);

	return (
		<nav className="vert-nav">
			<div className={`nav-inner bg-dark ${navState && 'open-nav'}`}>
				<div className="p-1">
					<div className="vert-nav-header">
						<h1>Food</h1>
						<div className="close">
							<FontAwesomeIcon
								icon={faTimes}
								size="2x"
								onClick={(e) => toggleNav(false)}
								className="cursor-pointer"
							/>
						</div>
					</div>

					<hr className="my-1" />
					<ul>
						<li>
							<NavLink
								to="/lists"
								isActive={(match, location) => {
									const rootPath =
										location.pathname.split('/');
									if (rootPath[1] === 'lists') {
										return true;
									}
								}}
								activeClassName="selected"
								onClick={(e) => toggleNav(false)}
							>
								<FontAwesomeIcon
									icon={faHamburger}
									className="mr"
								/>{' '}
								Lists
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/profiles"
								isActive={(match, location) => {
									const rootPath =
										location.pathname.split('/')[1];
									if (
										rootPath === 'profile' ||
										rootPath === 'profiles'
									) {
										return true;
									}
								}}
								activeClassName="selected"
								onClick={(e) => toggleNav(false)}
							>
								<FontAwesomeIcon icon={faUser} className="mr" />{' '}
								Profiles
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard"
								activeClassName="selected"
								onClick={(e) => toggleNav(false)}
							>
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
