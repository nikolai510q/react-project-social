import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    
    let state = props.store.getState().sidebar;
    debugger;
    let friendsElements = state.friends.map( (f) => <div className={s.friendsSidebar}><div>{f.name}</div>
    <div><img src={f.avatar}></img></div></div>)
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}>
                    <h2>Friends</h2>
                    { friendsElements }
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;