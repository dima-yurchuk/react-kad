import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__logo'}>
                KAD
            </div>
            <div className={'header__link'}>
                <img src={'/images/header/email.png'}/>
                <img src={'/images/header/whatsapp.png'}/>
                <img src={'/images/header/telegram.png'}/>
                <img src={'/images/header/youtube.png'}/>
            </div>
            <div className={'header__auth'}>
                <button className={'header__login'}>
                    Вход
                </button>
                <button className={'header__register'}>
                    Регистрация
                </button>
            </div>
        </div>
    );
};

export default Header;