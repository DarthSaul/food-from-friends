import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import VerticalNav from '../layout/VerticalNav';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import CreateProfile from '../profile-forms/CreateProfile';
import FileUpload from '../profile-forms/FileUpload';
import AddRestaurant from '../profile-forms/AddRestaurant';
import AddMedia from '../profile-forms/AddMedia';
import Lists from '../lists/Lists';
import ListForm from '../list-form/ListForm';
import List from '../list/List';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	const { pathname } = useLocation();
	const noNav = pathname === '/register' || pathname === '/login';

	return (
		<div className="grid-layout">
			{!noNav && <VerticalNav />}
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
					<PrivateRoute exact path="/create-profile">
						<CreateProfile />
					</PrivateRoute>
					<PrivateRoute exact path="/upload">
						<FileUpload />
					</PrivateRoute>
					<PrivateRoute exact path="/add-restaurant">
						<AddRestaurant />
					</PrivateRoute>
					<PrivateRoute exact path="/add-media">
						<AddMedia />
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
