import React, {PropsWithChildren, useState} from 'react';
import {IUser} from '../interfaces/Interfaces';
import {getItemFromLocalStorage} from '../utilities/utils';

export interface IUserContext {
	isLoggedIn: boolean;
	login: (user: IUser) => void;
	logout: () => void;
	getUserData: () => IUser;
}

const UserContext: React.Context<IUserContext> = React.createContext(null);
export const UserConsumer: React.Consumer<IUserContext> = UserContext.Consumer;

/**
 *This is the functional component for UserContext
 * @param {IFilmRouterProps} props
 * @returns {UserContext.Provider}
 */
export function UserProvider (props: PropsWithChildren<{}>): React.ReactElement {

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getItemFromLocalStorage <IUser>('userData'));

	/**
	 * Handles the User Login
	 * @param {IUser} userData
	 */
	function login (userData: IUser): void {
		window.localStorage.setItem('userData', JSON.stringify(userData));
		setIsLoggedIn(true);
	}

	/**
	 * Handles the User Login
	 */
	function logout (): void {
		window.localStorage.removeItem('userData');
		setIsLoggedIn(false);
	}

	/**
	 * Returns the current user data
	 * @returns {IUser}
	 */
	function getUserData (): IUser {
		return getItemFromLocalStorage('userData');
	}

	const userContextValue: IUserContext = {
		isLoggedIn,
		login,
		logout,
		getUserData
	};

	return (
		<UserContext.Provider value={userContextValue}>
			{props.children}
		</UserContext.Provider>
	);
}

export default UserContext;
