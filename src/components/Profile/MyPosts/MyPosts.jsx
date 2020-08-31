import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.profilePage.posts
  .map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);
  
  let onAddPost = () => { 
    props.addPost();
  }
    
 
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);    
  }
  

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div><textarea placeholder='Input your text' onChange={onPostChange} value={props.profilePage.newPostText}/></div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div>
      <div className={s.posts}> {postElements} </div>
    </div>
  )
}

export default MyPosts;