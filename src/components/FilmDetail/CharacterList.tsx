import React from 'react';
import Character from './Character';
import './CharacterList.css';

interface ICharactersListProps {
	characters: string[];
}

/**
 * Container of the characters list
 * @param {ICharactersListProps} props
 * @constructor
 */
function CharactersList (props: ICharactersListProps): React.ReactElement {
	const charactersUrls: string[] = props.characters;

	return (
		<div className="character-list">
			<h1>Characters</h1>
			<div className="characters-list-container">
				{charactersUrls.map(url => <Character key={url} characterUrl={url} />)}
			</div>
		</div>
	);
}


export default CharactersList;
