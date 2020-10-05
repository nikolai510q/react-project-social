import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.header__logo}> 
				<img src='https://image.flaticon.com/icons/svg/876/876765.svg' alt='' />
				<h1>SocialNetwork</h1>
			</div>
			<div className={s.loginBlock}>
				{props.isAuth 
					? <div> {props.login}
									<button className={s.loginBlock__buttonSignOut} onClick={props.signOut}>SignOut</button>
						</div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;