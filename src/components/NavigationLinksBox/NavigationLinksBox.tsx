import React from 'react';
import NavigationLinkItem from '../NavigationLinkItem/NavigationLinkItem';
import './NavigationLinksBox.css';

/**
 *This is the functional component for NavigationLinksBox
 * @constructor
 */
function NavigationLinksBox (): React.ReactElement {

	const navLinksList = [{
		navUrl: '/films',
		name: 'Films',
		count: 140
	}, {
		navUrl: '/vehicles',
		name: 'Vehicles',
		count: 100
	}, {
		navUrl: '/people',
		name: 'People',
		count: 100
	}, {
		navUrl: '/species',
		name: 'Species',
		count: 0
	}, {
		navUrl: '/starships',
		name: 'Starships',
		count: 1
	}, {
		navUrl: '/planets',
		name: 'Planets',
		count: 2
	}];

	return (
		<div className="nav-panel">
			{navLinksList.map((item, index) => (
				<NavigationLinkItem
					navLinkInfo={item}
					key={index}
				/>
			))}
		</div>
	);
}

export default NavigationLinksBox;
