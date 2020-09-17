import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	id: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}
//action creators
//*********************
export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
//*********************

export const getAuthUserData = () => (dispatch) => {
	return authAPI.authMe().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data;
			dispatch(setUserData(id, email, login, true));
		}
	});
}

export const signIn = (email, password, rememberMe) => (dispatch) => {
	authAPI.signIn(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
			debugger
			dispatch(stopSubmit('login', {_error: message}));
		}
	});
}

export const signOut = () => (dispatch) => {
	authAPI.signOut().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserData(null, null, null, false));
		}
	});
}
export default authReducer;