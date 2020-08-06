import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' width='900px' />
            </div>
            <div >
                ava + description
        </div>
            <div>
                My posts
          <div className={s.posts}>
                    New post
          </div>
                <div>
                    <div className={s.item}>
                        post1
            </div>
                    <div className={s.item}>
                        post2
            </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;