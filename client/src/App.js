import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

import './App.css';

const App = () => (
	<Router>
		<>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route>
					<Routes />
				</Route>
			</Switch>
		</>
	</Router>
);

export default App;
