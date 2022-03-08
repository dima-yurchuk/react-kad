import React from 'react';
import './Header.scss'
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const HEADER_IMAGES = [
    {
        name: 'email',
        alt: ''
    },
    {
        name: 'whatsapp',
        alt: ''
    },
    {
        name: 'telegram',
        alt: ''
    },
    {
        name: 'youtube',
        alt: ''
    },
];

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__logo'}>
                KAD
            </div>
            <div className={'header__link'}>
                {HEADER_IMAGES.map(({name, alt}) => <img src={`/images/header/${name}.png`} alt={alt}/>)}
            </div>
            {
                window.location.pathname==='/' && 
                <div className={'header__auth'}>
                    <Link to={'/login'}>
                        <Button className={'header__login'} text={'Вход'} style={{width:83}}  isBlue={true}/>
                    </Link>
                    <Link to={'/register'}>
                        <Button text={'Регистрация'} style={{width:143}}/>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Header;
