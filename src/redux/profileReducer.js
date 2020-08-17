const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hello. How are you?', likesCount: 4 },
        { id: 2, message: 'Nice nice nice', likesCount: 21 },
        { id: 3, message: 'Texttexttext', likesCount: 2 },
        { id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newTextP;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} );
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newTextP: text} );

export default profileReducer;