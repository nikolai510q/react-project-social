import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setCurrentPage, toggleFollowingInProgress, requestUsers,
				 follow, unfollow} from '../../redux/usersReducer';
import { getUsers, getTotalUsersCount, getCurrentPage, 
				 getPageSize, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'; //PROTECTED USERS BEFORE LOGIN

class UsersContainer extends React.Component {
	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props;
		this.props.requestUsers(pageNumber, pageSize);
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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage,
		toggleFollowingInProgress, requestUsers
	})
)(UsersContainer)
//withAuthRedirect in compose
