import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import Alert from './components/layout/Alert';

import './App.css';

const App = () => (
	<Router>
		<>
			<Alert />
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
