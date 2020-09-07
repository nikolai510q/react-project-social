import { authAPI } from '../api/api';

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
				...action.data,
				isAuth: true
			}
		default:
			return state;
	}
}
//action creators
//*********************
export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
//*********************

export const getAuthUserData = () => (dispatch) => {
	authAPI.authMe().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data;
			dispatch(setUserData(id, email, login));
		}
	});
}

export default authReducer;