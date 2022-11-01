import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import VerticalNav from '../layout/VerticalNav';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Lists from '../lists/Lists';
import ListForm from '../list-form/ListForm';
import List from '../list/List';
import PrivateRoute from '../routing/PrivateRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Routes = () => {
	const [nav, toggleNav] = useState(false);

	return (
		<div className="grid-layout">
			<VerticalNav navState={nav} toggleNav={toggleNav} />
			<nav
				className="nav-mini cursor-pointer fw-light"
				onClick={() => toggleNav(true)}
			>
				<FontAwesomeIcon icon={faBars} size="lg" className="mr" />
				<span className="fs-1">Menu</span>
			</nav>
			<section className="content-container">
				<Switch>
					<Route exact path="/profiles">
						<Profiles />
					</Route>
					<Route exact path="/profile/:id">
						<Profile />
					</Route>
					<Route exact path="/lists">
						<Lists />
					</Route>
					<Route exact path="/lists/new">
						<ListForm />
					</Route>
					<Route exact path="/lists/:id">
						<List />
					</Route>

					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</section>
		</div>
	);
};

export default Routes;
