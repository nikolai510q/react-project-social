import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	setCurrentPage, toggleFollowingInProgress, getUsers,
	follow, unfollow
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
		{
			//это заменяется thunkcreator§ом
			// if (this.props.users.length === 0) {
			//     this.props.toggleIsFetching(true);
			//     usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			//         this.props.toggleIsFetching(false);
			//         this.props.setUsers(data.items);
			//         this.props.setTotalUsersCount(data.totalCount);
			//     });
			// }
		}
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		{
			// this.props.toggleIsFetching(true);
			// this.props.setCurrentPage(pageNumber);
			// usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			// 		this.props.toggleIsFetching(false);
			// 		this.props.setUsers(data.items);
			// });
		}
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress} />
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
//MDTP old version, refactoring to { } in connect
{
	// let mapDispatchToProps = (dispatch) => {
	//     return {
	//         follow: (userId) => {
	//             dispatch(followActionCreator(userId));
	//         },
	//         unfollow: (userId) => {
	//             dispatch(unfollowActionCreator(userId));
	//         },
	//         setUsers: (users) => {
	//             dispatch(setUsersActionCreator(users));
	//         },
	//         setCurrentPage: (pageNumber) => {
	//             dispatch(setCurrentPageActionCreator(pageNumber));
	//         },
	//         setTotalUsersCount: (totalCount) => {
	//             dispatch(setTotalUsersCountActionCreator(totalCount));
	//         },
	//         toggleIsFetching: (isFetching) => {
	//             dispatch(toggleIsFetchingActionCreator(isFetching));
	// 				},
	// 				toggleFollowingInProgress: (followingInProgress, userId) => {
	// 					dispatch(toggleFollowingInProgressActionCreator(followingInProgress, userId));
	// 			}
	//     }
	// }
}

export default connect(mapStateToProps, {
	follow, unfollow, setCurrentPage,
	toggleFollowingInProgress, getUsers
})(UsersContainer);
