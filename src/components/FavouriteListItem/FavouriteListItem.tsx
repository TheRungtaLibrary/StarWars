import React from 'react';
import {IFavourite} from '../../interfaces/Interfaces';
import './FavouriteListItem.css';

interface IFavouriteItemProps {
    favouriteInfo: IFavourite;
}

/**
* This is the functional component for FavouriteListItem
* @param {IFavouriteItemProps} props
* @constructor
*/
function FavouriteListItem (props: IFavouriteItemProps): React.ReactElement {

	return (
		<div>
			<span>{props.favouriteInfo.name} <br/> {props.favouriteInfo.selections.length}</span>
		</div>
	);
}

export default FavouriteListItem;
