// import { authAPI } from '../api/api';
// import { stopSubmit } from 'redux-form';

import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED-SUCCESS';
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	promise.then(() => {
		dispatch(initializedSuccess());
	})
	
}

export default appReducer;