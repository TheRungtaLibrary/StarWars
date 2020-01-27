import React from 'react';
import {Link} from 'react-router-dom';
import './FilmListItem.css';
import {IFilm} from '../../interfaces/Interfaces';
import {getIdFromUrl} from '../../utilities/utils';
import FavouriteContext, {IFavouriteContext} from '../../Contexts/FavouriteContext';

interface IFilmListItemProps {
    filmInfo: IFilm;
}

/**
* This is the functional component for FilmListItem
* @param {IFilmListItemProps} props
* @constructor
*/
function FilmListItem (props: IFilmListItemProps): React.ReactElement {

	const favouriteContext: IFavouriteContext = React.useContext(FavouriteContext);

	/**
	 * Handles the value change for Favourites checkbox and sends the updated isFav value to the context
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	function toggleFavStatus (event: React.ChangeEvent<HTMLInputElement>): void {
		favouriteContext.updateFavourites('Films', props.filmInfo.title, event.target.checked);
	}

	return (
		<div className="film-list-item card" key={props.filmInfo.episode_id}>
			<span><b>Director:</b> {props.filmInfo.director}</span>
			<span>
				<Link to={`/films/${getIdFromUrl('films', props.filmInfo.url)}`}>
					{props.filmInfo.title}
				</Link>
			</span>
			<span><b>Summary:</b> {props.filmInfo.opening_crawl}</span>
			<label className="checkbox-label">
				<input type="checkbox" onChange={toggleFavStatus} />
				<span className="checkbox-custom rectangular" />
			</label>
		</div>
	);
}

export default FilmListItem;
