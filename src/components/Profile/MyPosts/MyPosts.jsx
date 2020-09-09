import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reset, Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  const addNewPost = (formData, dispatch) => {
		console.log(formData)
		props.addPost(formData.postText);
		dispatch(reset("addPost"));
  }
  
  let postElements = props.profilePage.posts
  .map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);
  
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <AddPostReduxForm onSubmit={addNewPost}/>
      </div>
      <div className={s.posts}> {postElements} </div>
    </div>
  )
}

const AddPostForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field component='textarea' placeholder={'Input new post text'} name={'postText'}/>
					<button>ADD POST</button>
				</div>
			</form>
		</div>
	)
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

export default MyPosts;