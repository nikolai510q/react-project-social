import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profile/SET-STATUS';
const DELETE_POST = 'social-network/profile/DELETE-POST';

let initialState = {
	posts: [
		{ id: 1, message: 'Hello. How are you?', likesCount: 4 },
		{ id: 2, message: 'Nice nice nice', likesCount: 21 },
		{ id: 3, message: 'Texttexttext', likesCount: 2 },
		{ id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost]
			}

		case SET_STATUS:
		return {
			...state,
			status: action.status
		}
		
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
		dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
		dispatch(setStatus(response.data)); 
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
}

export default profileReducer;