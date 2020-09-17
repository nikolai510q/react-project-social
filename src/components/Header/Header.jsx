import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src='https://image.flaticon.com/icons/svg/876/876765.svg' alt='' />
			<div className={s.loginBlock}>
				{props.isAuth 
					? <div> {props.login}
									<button onClick={props.signOut}>SignOut</button>
						</div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;