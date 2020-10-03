import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reset, Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utils/validators/validators';
import { Element } from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo((props) => {
  //PureComponent делает проверку shouldComponentUpdate сам
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props  || nextState !== this.state  
  //   //это хуйня какая-то, как может вернуть false, если это 2 разных объекта, свойства которых одинаковы {}!=={}.
  // }

  const addNewPost = (formData, dispatch) => {
		console.log(formData);
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
});


const maxLenght10 = maxLenghtCreator(10);
const Textarea = Element('textarea');
const AddPostForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
          <Field component={Textarea} placeholder={'Input new post text'} name={'postText'} 
                 validate={[required, maxLenght10]}/>
					<button>ADD POST</button>
				</div>
			</form>
		</div>
	)
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

export default MyPosts;