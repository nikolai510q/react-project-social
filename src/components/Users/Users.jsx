import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhotoNull.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import {followAPI} from '../../api/api';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}


	return <div>
		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p && s.selectedPage}
					onClick={() => { props.onPageChanged(p) }}>{p}</span>
			})}


		</div>
		{/* <button onClick={this.getUsers}>Get Users</button>   */}
		{props.users.map(u => <div key={u.id}>
			<span>
				<div>
					<NavLink to={'/profile/' + u.id}>
						<img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto} />
					</NavLink>
				</div>
				<div>
					{u.followed
						? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => { 
							props.toggleFollowingInProgress(true, u.id);
							followAPI.unfollow(u.id).then(data => {
								if (data.resultCode == 0) {
									props.unfollow(u.id);
								}
								props.toggleFollowingInProgress(false, u.id);
							});
						}}>Unfollow</button>
						: <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => { 
							props.toggleFollowingInProgress(true, u.id);
							followAPI.follow(u.id).then(data => {
								if (data.resultCode == 0) {
									props.follow(u.id);
								}
								props.toggleFollowingInProgress(false, u.id);
							});			
							}}>Follow</button>}
				</div>
			</span>
			<span>
				<span>
					<div>{u.name}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{"u.location.country"}</div>
					<div>{"u.location.city"}</div>
				</span>
			</span>
		</div>)
		}
	</div>
}

export default Users;