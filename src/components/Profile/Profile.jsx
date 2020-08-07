import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
            </div>
            <div >
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;