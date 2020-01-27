import React from 'react';
import {IUser} from '../../interfaces/Interfaces';
import UserContext, {IUserContext} from '../../Contexts/UserContext';
import './Profile.css';

/**
* This is the functional component for Profile
* @constructor
*/
function Profile (): React.ReactElement {

	const userContext: IUserContext = React.useContext(UserContext);
	const userData: IUser = userContext.getUserData();

	/**
	 * onClick handler for Logout button
	 */
	function logout (): void {
		userContext.logout();
	}

	return (
		<div className="profile-panel">
			<div className="img-panel">
				<img src='https://img.icons8.com/doodle/48/000000/grey.png' alt='profile image' />
				<h4>{userData.firstname}</h4>
				<h5>{userData.city}, {userData.country}</h5>
			</div>
			<button type='button' onClick={logout} className='profile-logout-btn'>Logout... You human thingy!</button>
		</div>
	);
}

export default Profile;
