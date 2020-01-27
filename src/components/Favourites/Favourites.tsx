import React from 'react';
import FavouriteListItem from '../FavouriteListItem/FavouriteListItem';
import FavouriteContext, {IFavouriteContext} from '../../Contexts/FavouriteContext';
import './Favourites.css';

/**
 * This is the functional component for Favourites
 * @constructor
 */
function Favourites (): React.ReactElement {

	const favouritesContext: IFavouriteContext = React.useContext(FavouriteContext);

	return (
		<div className="favourites-panel">
			<div>
				<label>My favourites</label>
			</div>
			<div className="favourites-item-panel">
				{favouritesContext.favourites.map((favourite, index) => (
					<FavouriteListItem
						favouriteInfo={favourite}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}

export default Favourites;
