import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state, 
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
				// users: state.users.map(u => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: true }
				// 	}
				// 	return u;
				// })
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
			}
		case SET_USERS:
			return { ...state, users: [...action.users] } //...state.users, ...action.users
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state;
	}
}
//action creators
//*********************
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, userId });
//*********************


//thunks
//getUsersThunkCreator
export const requestUsers = (page, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));
		usersAPI.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}

const followUnfollowToggle = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, userId));
		let data = await apiMethod(userId);
			if (data.resultCode === 0) {
				dispatch(actionCreator(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
}

//followThunkCreator
export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowToggle(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
	}
}
//unfollowThunkCreator
export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowToggle(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
	}
}
export default usersReducer;