import React, {useState, useEffect} from 'react';
import {Redirect, RouteComponentProps} from 'react-router-dom';
import {IFilm} from '../../interfaces/Interfaces';
import CharacterList from './CharacterList';
import './FilmDetail.css';

interface IFilmRouterProps extends RouteComponentProps<IFilmDetailProps>{
	filmId: string;
}

interface IFilmDetailProps {
	filmId: string;
}

/**
 *This is the functional component for FilmDetail
 * @param {IFilmRouterProps} props
 * @constructor
 */
function FilmDetail (props: IFilmRouterProps): React.ReactElement {
	const [filmDetails, setFilmDetails] = useState<IFilm>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const filmId = Number(props.match.params.filmId);
	const filmUrl = `https://swapi.co/api/films/${filmId}`;

	const onFilmDetailsLoaded = (filmData: IFilm): void => {
		setFilmDetails(filmData);
		setIsLoaded(true);
	};

	const loadFilmDetails = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			onFilmDetailsLoaded(data);
		} catch (error) {
			setIsError(true);
			setIsLoaded(false);
		}
	};

	useEffect(() => {
		loadFilmDetails(filmUrl);
	}, []);

	if (isError) {
		return <Redirect to="/films" />;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className="film-details-title text-centered">
				<h1>{filmDetails.title}</h1>
			</div>
			<div className="film-details-header">
				<div><b>Director:</b> {filmDetails.director}</div>
				<div><b>Release date:</b> {filmDetails.release_date}</div>
				<div><b>Producer:</b> {filmDetails.producer}</div>
			</div>
			<div className="film-details-summary">
				<b>Summary:</b>
				<div>{filmDetails.opening_crawl}</div>
			</div>
			<div>
				<CharacterList characters={filmDetails.characters} />
			</div>
		</div>
	);
}

export default FilmDetail;
