// CORE
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
// COMPONENTS
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
// STYLES
import './Login.scss'

const Login = () => {
    const [isVisiblePassword, setVisiblePassword] = useState(false);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate()

    function showPassword(){
        setVisiblePassword(prevState => {
            return !prevState
        })
    }
    const users = useSelector(state => {
        const { registerReducer } = state;
        return registerReducer.users;
    });
    console.log('-->', users)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const isUserFound = users.find(user => (user.email === login || user.phone === login)  && user.password === password)

        if(!isUserFound) {
            setError('Некоректні дані')
            return;
        }

        navigate('/menu')
    }
    return (
        <AuthLayout>
            <div className={'login'}>
                <form onSubmit={handleSubmit} className={'login__content'}>
                    <div className={'login__title'}>
                        Вход
                    </div>
                    <div className={'login__fields'}>
                        <Input onChange={(e) => {setLogin(e.target.value)}}
                               type={'text'}
                               title={'Логин'}
                               placeholder={'Введите эл. почту или номер телефона'}
                               style={{width:400}}/>
                        <Input onChange={(e) => {setPassword(e.target.value)}}
                               type={isVisiblePassword ? 'text' : 'password'}
                               title={'Пароль'}
                               placeholder={'Введите пароль'}
                               style={{width:400}}/>
                        <img  onClick={showPassword} className={'login__image'} src={'/images/login/visibility.png'}/>
                        <div className={'login__error'}>
                            {error}
                        </div>
                    </div>
                    <input type={'submit'} value={'Войти'} className={'login__button'} style={{width:400}}/>
                    <div className={'login__text'}>
                        Новый пользователь? <Link style={{ textDecoration: 'none', color:'black' }} to={'/register'}><b>Регистрация</b></Link>
                    </div>
                </form>
                <div className={'login__footer'}>
                    © 2021 WildBest
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;