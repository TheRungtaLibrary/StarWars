import React, {useState} from 'react';
import './Login.css';
import UserContext, {IUserContext} from '../../Contexts/UserContext';
import {IUser} from '../../interfaces/Interfaces';

/**
 *This is the functional component for Login
 * @constructor
 */
function Login (): React.ReactElement {

	const initState = {
		firstname: '',
		lastname: '',
		city: '',
		country: ''
	};

	const [user, setUser] = useState<IUser>(initState);

	const userContext: IUserContext = React.useContext(UserContext);

	/**
	 * onClick handler for the Login form
	*/
	function onSubmit (): void {
		userContext.login(user);
	}

	/**
	 * Handles the change event of the Form elements
	 * @param {React.ChangeEvent} event
	 */
	function onChange (event: React.ChangeEvent<HTMLInputElement>): void {
		const updatedKey = event.target.name;
		const updatedValue = event.target.value;

		setUser({...user, [updatedKey]: updatedValue});
	}

	/**
	 * Handles the validation of the Form elements to enable or disable login button
	 * @returns {boolean}
	 */
	function validateForm (): boolean {
		return Object.values(user).some(value => !value);
	}

	return (
		<form className='card'>
			<div className=''>
				<span>The SWAPI</span>
			</div>
			{
				Object.entries(user).map(([key, val]) => (
					<div key={key}>
						<input
							type='text'
							name={key}
							value={val}
							placeholder={key}
							onChange={onChange}
						/>
					</div>
				))
			}
			<button type='button' className='login-btn-submit' disabled={validateForm()} onClick={onSubmit}>Login</button>
		</form>
	);
}

export default Login;
