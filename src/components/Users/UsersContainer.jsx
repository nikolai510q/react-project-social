import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	setCurrentPage, toggleFollowingInProgress, requestUsers,
	follow, unfollow
} from '../../redux/usersReducer';
import { getUsers, getTotalUsersCount, getCurrentPage, 
	getPageSize, getIsFetching, getFollowingInProgress
} from '../../redux/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'; //PROTECTED USERS BEFORE LOGIN

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize);
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


// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	}
// }

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

// export default connect(mapStateToProps, {
// 	follow, unfollow, setCurrentPage,
// 	toggleFollowingInProgress, getUsers
// })(UsersContainer);

export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage,
		toggleFollowingInProgress, requestUsers
	})
)(UsersContainer)
//withAuthRedirect in compose

//MDTP old version, refactoring to { } in connect
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