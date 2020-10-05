import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({currentPage, pageSize, totalUsersCount, 
							onPageChanged, follow, unfollow, 
							followingInProgress, users}) => {
	return <div>
		<Paginator currentPage={currentPage} 
							 pageSize={pageSize} 
							 onPageChanged={onPageChanged} 
							 totalUsersCount={totalUsersCount}/>
		{users.map(u => <User key={u.id}
													user={u} 
													follow={follow} 
													unfollow={unfollow} 
							 						followingInProgress={followingInProgress} />)
		}
	</div>
}

export default Users;