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
                        <Button className={'header__login'} isBlue={true}>
                            Вход
                        </Button>
                    </Link>
                    <Link to={'/register'}>
                        <Button width={143} text={'Регистрация'}/>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Header;
