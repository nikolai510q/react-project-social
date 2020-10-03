import profileReducer,{ addPostActionCreator, deletePost } from './profileReducer';

let state = {
	posts: [
		{ id: 1, message: 'Hello. How are you?', likesCount: 4 },
		{ id: 2, message: 'Nice nice nice', likesCount: 21 },
		{ id: 3, message: 'Texttexttext', likesCount: 2 },
		{ id: 4, message: 'Hi. What are you doing?', likesCount: 0 },
	]
}

test('length of post should be incremented', () => {
	//1.test data
	let action = addPostActionCreator('PostTextReactZbs');
	
	//2.action
	let newState = profileReducer(state, action);

	//3.expected result
	expect(newState.posts.length).toBe(5);
});

test('new post message is currect', () => {
	//1.test data
	let action = addPostActionCreator('PostTextReactZbs');
	
	//2.action
	let newState = profileReducer(state, action);

	//3.expected result
	expect(newState.posts[4].message).toBe('PostTextReactZbs');
});

test('after deleting length of posts should be decremented', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(3);
});

test('after deleting length of posts should not be decremented if ID incorrected', () => {
	let action = deletePost(1000);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});
