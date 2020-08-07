import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hello. How are you?' likesCount='4' />
      <Post message='Easy props' likesCount='7'/>
    </div>
  )
}

export default MyPosts;