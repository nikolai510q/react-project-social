let initialState = {
	friends: [
		{ id: 1, name: 'Friend1', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg' },
		{ id: 2, name: 'Friend2', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg' },
		{ id: 3, name: 'Friend3', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg' },
		{ id: 4, name: 'Friend4', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg' }
	]
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;
