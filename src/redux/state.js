let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
            { id: 3, name: 'Fedya', avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d8ddd81559947.5d03cb5b6b0e5.jpg' },
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
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newTextP) => {
    state.profilePage.newPostText = newTextP;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newTextM) => {
    state.dialogsPage.newMessageText = newTextM;
    rerenderEntireTree(state);
}

export default state;