import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id
	return (
		<div>
			<NavLink to={path}>
				<div className={s.dialog}>
					<div><img src={props.avatar} alt=''></img></div>
					<div>{props.name}</div>
				</div>
			</NavLink>
		</div>
	);
}

export default DialogItem;