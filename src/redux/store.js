import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello. How are you?', likesCount: 4 },
                { id: 2, message: 'Nice nice nice', likesCount: 21 },
                { id: 3, message: 'Texttexttext', likesCount: 2 },
                { id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Friend1', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg'},
                {id: 2, name: 'Friend2', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg'},
                {id: 3, name: 'Friend3', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg'},
                {id: 4, name: 'Friend4', avatar: 'https://image.flaticon.com/icons/svg/149/149452.svg'}
            ]        
        }
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;