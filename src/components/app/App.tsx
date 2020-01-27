import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.css';
import Login from '../Login/Login';
import {UserProvider, UserConsumer} from '../../Contexts/UserContext';
import Home from '../Home/Home';
import {FavouriteProvider} from '../../Contexts/FavouriteContext';

/**
 *This is the functional component for App
 * @constructor
 */
function App (): React.ReactElement {
	return (
		<UserProvider>
			<FavouriteProvider>
				<Router>
					<Switch>
						<Route path="/login">
							<UserConsumer>
								{(userContext): React.ReactElement => userContext.isLoggedIn ? <Redirect to="/films" /> : <Login/>}
							</UserConsumer>
						</Route>
						<Route path="*">
							<UserConsumer>
								{(userContext): React.ReactElement => userContext.isLoggedIn ? <Home />: <Redirect to="/login" />}
							</UserConsumer>
						</Route>
					</Switch>
				</Router>
			</FavouriteProvider>
		</UserProvider>
	);
}

export default App;
