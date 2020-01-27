import React, {useEffect, useState} from 'react';
import './Character.css';
import {IPeople} from '../../interfaces/Interfaces';
import { Redirect } from 'react-router';

interface ICharacterProps {
    characterUrl: string;
}

/**
 * Container displaying a single character information
 * @param {ICharacterProps} props
 * @constructor
 */
function Character (props: ICharacterProps): React.ReactElement {
	const [characterDetails, setCharacterDetails] = useState<IPeople>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);
	const characterUrl = props.characterUrl;

	const onCharacterDetailsDetailsLoaded = (characterData: IPeople): void => {
		setCharacterDetails(characterData);
		setIsLoaded(true);
	};

	const loadCharacterDetails = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			onCharacterDetailsDetailsLoaded(data);
		} catch (error) {
			setIsError(true);
			setIsLoaded(false);
		}
	};

	useEffect(() => {
		loadCharacterDetails(characterUrl);
	}, []);

	if (isError) {
		return <Redirect to="/films" />;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<div className="character-card">
			<div className="character-card-name">{characterDetails.name}</div>
			<div className="character-card-body-info">
				<div><b>Height</b>: {characterDetails.height} cm</div>
				<div><b>Mass</b>: {characterDetails.mass} kg</div>
				<div><b>Eye color</b>: {characterDetails.eye_color}</div>
			</div>
		</div>
	);
}

export default Character;
