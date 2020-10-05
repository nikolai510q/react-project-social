import React from 'react';
import { useState, useEffect } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = ({props}) => {

	// let stateWithSetState = useState(false);
	// let editMode = stateWithSetState[0];
	// let setEditMode = stateWithSetState[1];

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect( () => {
		setStatus(props.status);
	}, [props.status] );

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		// this.setState({
		// 	status: e.currentTarget.value
		// })
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{ !editMode &&
				<div>
					<span onClick={activateEditMode}>{props.status || 'NOSTATUSNOSTATUSNOSTATUS'}</span>
				</div>
			}
			{ editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}></input>
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;