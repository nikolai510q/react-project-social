import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn1.flamp.ru/8c5aead96cc82fbde736b4be1fe17432.jpg' />
      { props.message }
      <div>
        { props.likesCount }<span>like</span>
      </div>
    </div>
    )
}

export default Post;