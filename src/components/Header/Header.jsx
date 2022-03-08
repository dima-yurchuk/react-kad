import React from 'react';
import './Header.scss'
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Header = () => {
    let auth = null;
    if (window.location.pathname==='/'){
        auth =  <div className={'header__auth'}>
            <Link to={'/login'}>
                <button className={'header__login'}>
                    Вход
                </button>
            </Link>
            <Link to={'/register'}>
                <Button width={143} text={'Регистрация'}/>
            </Link>
        </div>;
    }
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
            {auth}
        </div>
    );
};

export default Header;