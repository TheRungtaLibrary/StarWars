import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FilmsList from '../FilmsList/FilmsList';
import Profile from '../Profile/Profile';
import NavigationLinksBox from '../NavigationLinksBox/NavigationLinksBox';
import FilmDetail from '../FilmDetail/FilmDetail';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Species from '../Species/Species';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
import NotFound from '../NotFound/NotFound';
import './Home.css';
import Favourites from '../Favourites/Favourites';

/**
* This is the functional component for Home
* @constructor
*/
function Home (): React.ReactElement {

	return (
		<Router>
			<div>
				<div className="left-panel card">
					<Profile />
					<Favourites />
					<NavigationLinksBox />
				</div>
				<div className="right-panel">
					<Switch>
						<Route exact path='/' component={FilmsList} />
						<Route exact path="/films" component={FilmsList} />
						<Route path="/films/:filmId" component={FilmDetail} />
						<Route path="/people" component={People} />
						<Route path="/planets" component={Planets} />
						<Route path="/species" component={Species} />
						<Route path="/starships" component={Starships} />
						<Route path="/vehicles" component={Vehicles} />
						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default Home;
