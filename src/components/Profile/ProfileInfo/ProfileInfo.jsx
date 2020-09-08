import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/* <div className={s.item}>
				<img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg' />
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt=''/>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				{/* <div>Description:
					<div>About me: {props.profile.aboutMe}</div>
					<div>My FB: {props.profile.contacts.facebook}</div>
					<div>My VK: {props.profile.contacts.vk}</div>
					<div>My Twitter: {props.profile.contacts.twitter}</div>
				</div> */}
			</div>
		</div>
	)
}

export default ProfileInfo;