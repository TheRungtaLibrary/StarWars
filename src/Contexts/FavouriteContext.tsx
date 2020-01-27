import React, {PropsWithChildren, useState} from 'react';
import {IFavourite} from '../interfaces/Interfaces';

export interface IFavouriteContext {
	favourites: IFavourite[];
	updateFavourites: (name: string, selection: string, isFav: boolean) => void;
}

const FavouriteContext: React.Context<IFavouriteContext> = React.createContext(null);

/**
 *This is the Provider component for FavouriteContext
 * @param {PropsWithChildren} props
 * @returns {FavouriteContext.Provider}
 */
export function FavouriteProvider (props: PropsWithChildren<{}>): React.ReactElement {

	const favouriteItemsList: IFavourite[] = [{
		name: 'Films',
		selections: []
	}, {
		name: 'Vehicles',
		selections: []
	}, {
		name: 'People',
		selections: []
	}, {
		name: 'Species',
		selections: []
	}, {
		name: 'Starships',
		selections: []
	}, {
		name: 'Planets',
		selections: []
	}];

	const [favourites, setFavourites] = useState(favouriteItemsList);

	/**
	 * Updates the Favourite list with changes
	 * @param {string} name
	 * @param {string} selection
	 * @param {boolean} isFavourite
	 */
	function updateFavourites (name: string, selection: string, isFavourite: boolean): void {
		const fav: IFavourite = favourites.find(favourite => {
			return favourite.name === name;
		});

		const favIndex = favourites.indexOf(fav);
		isFavourite ? fav.selections.push(selection) : fav.selections.splice(fav.selections.indexOf(selection), 1);

		setFavourites([...favourites.slice(0, favIndex), fav, ...favourites.slice(favIndex+1)]);
	}

	const favouritesContextVal: IFavouriteContext = {
		favourites,
		updateFavourites
	};

	return (
		<FavouriteContext.Provider value={favouritesContextVal}>
			{props.children}
		</FavouriteContext.Provider>
	);
}

export default FavouriteContext;
