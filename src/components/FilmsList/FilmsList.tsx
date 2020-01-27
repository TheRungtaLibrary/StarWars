import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router';
import FilmListItem from '../FilmListItem/FilmListItem';
import {IFilm, IListResults} from '../../interfaces/Interfaces';
import './FilmsList.css';

/**
 *This is the functional component for FilmListItem
 * @constructor
 */
function FilmsList (): React.ReactElement {
	const [films, setFilms] = useState<IFilm[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const filmsUrl = 'https://swapi.co/api/films/';

	const onFilmsListLoaded = (filmData: IListResults<IFilm>): void => {
		setFilms(filmData.results);
		setIsLoaded(true);
	};

	const loadFilms = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			onFilmsListLoaded(data);
		} catch (error) {
			setIsError(true);
			setIsLoaded(false);
		}
	};

	useEffect(()=>{
		loadFilms(filmsUrl);
	}, []);

	if (isError) {
		return <Redirect to="/films" />;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="film-list-header text-centered">
				<h1>Films</h1>
			</div>
			<div className="film-list-panel">
				{films.map((film: IFilm) => (
					<FilmListItem
						filmInfo={film}
						key={film.episode_id}
					/>
				))}
			</div>
		</div>
	);
}

export default FilmsList;
