const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Pawka', avatar: 'https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg' },
		{ id: 2, name: 'Sawka', avatar: 'https://st4.depositphotos.com/1759480/21186/i/950/depositphotos_211863896-stock-photo-tiger-art-illustration-color.jpg' },
		{ id: 3, name: 'Fedya', avatar: 'https://avatars.mds.yandex.net/get-pdb/2771172/3edfddc3-2b2f-4c8c-869a-b6a0077fccae/s1200' },
		{ id: 4, name: 'Olya', avatar: 'https://lifeandjoy.ru/uploads/posts/2016-05/1464256981_4.jpg' },
		{ id: 5, name: 'Valera', avatar: 'https://sun9-67.userapi.com/c625522/v625522510/1d2fd/S1O6D5vdC4c.jpg' }
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hello' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'How are you?' },
		{ id: 5, message: 'Nice work' }
	],
	newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
	let stateCopy;
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				message: state.newMessageText
			}
			return {
				...state,
				newMessageText: '',
				messages: [...state.messages, newMessage]
			} //вместо push

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newTextM
			};
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newTextM: text });

export default dialogsReducer;