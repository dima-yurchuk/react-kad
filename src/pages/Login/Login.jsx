import React, {useState} from 'react';
import './Login.scss'
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

const Login = () => {
    const [isVisiblePassword, setVisiblePassword] = useState(false);
    function showPassword(){
        setVisiblePassword(prevState => {
            return !prevState
        })
    }
    return (
        <AuthLayout>
            <div className={'login'}>
                <div className={'login__content'}>
                    <div className={'login__title'}>
                        Вход
                    </div>
                    <div className={'login__fields'}>
                        <Input type={'text'} title={'Логин'} placeholder={'Введите эл. почту или номер телефона'}
                               style={{height:68, width:400}}/>
                        <Input type={isVisiblePassword ? 'text' : 'password'} title={'Пароль'}
                               placeholder={'Введите пароль'} style={{height:68, width:400}}/>
                        <img  onClick={showPassword} className={'login__image'} src={'/images/login/visibility.png'}/>
                    </div>
                    <Link to={'/menu'}>
                        <div className={'login__button'}>
                            <Button text={'Войти'} style={{width:400}} isBlue={true}/>
                        </div>
                    </Link>
                    <div className={'login__text'}>
                        Новый пользователь? <Link style={{ textDecoration: 'none', color:'black' }} to={'/register'}><b>Регистрация</b></Link>
                    </div>
                </div>
                <div className={'login__footer'}>
                    © 2021 WildBest
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;