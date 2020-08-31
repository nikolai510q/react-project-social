const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hello. How are you?', likesCount: 4 },
        { id: 2, message: 'Nice nice nice', likesCount: 21 },
        { id: 3, message: 'Texttexttext', likesCount: 2 },
        { id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state,
                    newPostText: '',
                    posts: [...state.posts, newPost]}
            
        case UPDATE_NEW_POST_TEXT: 
            return {...state,
                    newPostText: action.newTextP};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} );
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newTextP: text} );

export default profileReducer;