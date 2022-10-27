import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VerticalNav from '../layout/VerticalNav';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import FileUpload from '../profile-forms/FileUpload';
import Lists from '../lists/Lists';
import ListForm from '../list-form/ListForm';
import List from '../list/List';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
	return (
		<div className="grid-layout">
			<VerticalNav />
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
					<PrivateRoute exact path="/upload">
						<FileUpload />
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
