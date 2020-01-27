import React from 'react';
import {Link} from 'react-router-dom';
import {INavLink} from '../../interfaces/Interfaces';
import './NavigationLinkItem.css';

interface INavigationLinkItemProps {
    navLinkInfo: INavLink;
}

/**
* This is the functional component for NavigationLinkItem
* @param {INavigationLinkItemProps} props
* @constructor
*/
function NavigationLinkItem (props: INavigationLinkItemProps): React.ReactElement {
	return (
		<Link to={props.navLinkInfo.navUrl}>
			<span className="nav-link-item-name-span">{props.navLinkInfo.name}</span>
			<span>{props.navLinkInfo.count}</span>
		</Link>
	);
}

export default NavigationLinkItem;
