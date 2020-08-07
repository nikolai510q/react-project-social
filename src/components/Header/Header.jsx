import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://image.flaticon.com/icons/svg/876/876765.svg' />
            <div>My project on React</div>
        </header>
    )
}

export default Header;