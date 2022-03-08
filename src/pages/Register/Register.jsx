import React from 'react';
import './Register.scss'
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <AuthLayout>
            <div className={'register'}>
                <div className={'register__content'}>
                    <div className={'register__title'}>
                        Регистрация
                    </div>
                    <div className={'register__fields'}>
                        <div className={'register__fieldsHorizontally'}>
                            <Input type={'text'} title={'Имя'} placeholder={'Введите имя'}
                                   style={{height:68, width:192}}/>
                            <Input type={'text'} title={'Фамилия'} placeholder={'Введите фамилию'}
                                   style={{height:68, width:192}}/>
                        </div>
                        <Input title={'Телефон'} placeholder={'Введите номер телефона'} style={{height:87}}/>
                        <div className={'register__hint'}>
                            *Номер телефона должен быть введен в международном формате
                        </div>
                        <Input title={'Электронный адрес'} placeholder={'Введите адрес эл. почты'} style={{height:68}}/>
                    </div>
                    <div className={'register__checkbox'}>
                        <input className={'register__checkboxItem'} type={"checkbox"}/>Я принимаю условия <span style={{color:'#1343EA'}}><b>пользовательского соглашения</b></span>
                    </div>
                    <button className={'register__button'}>
                        Зарегистрироваться
                    </button>
                    <div className={'register__text'}>
                        Есть аккаунт? <Link style={{ textDecoration: 'none', color:'black' }} to={'/login'}><b>Войти</b></Link>
                    </div>
                </div>
                <div className={'login__footer'}>
                    © 2021 WildBest
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;