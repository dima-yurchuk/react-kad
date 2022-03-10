import React, {useEffect, useState} from 'react';
import './Register.scss'
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/Input/Input";
import {Link, NavLink, useNavigate} from "react-router-dom";
import connect from "react-redux"
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid';
import {createUser} from "../../redux/action";
import {validateUsername, validateEmail, validatePhoneNumber} from "../../utils/validators";
import {Redirect} from "react-router-dom";

const Register = (props) => {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [isErrors, setIsErrors] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        // const id = uniqid()
        setErrors(validate)
        // console.log(errors)
        // console.log(Object.keys(errors).length)
        // if(Object.keys(errors).length === 0){
        //     dispatch(createUser(id, firstname + ' ' + lastname, email, password, phoneNumber))
        // }
    }
    useEffect(() =>{
        const id = uniqid()
        console.log(errors)
        console.log(Object.keys(errors).length)
        if(Object.keys(errors).length === 0 && isErrors){
            dispatch(createUser(id, firstname + ' ' + lastname, email, password, phoneNumber))
            navigate('/login')
        }
        setIsErrors(true)
    }, [errors])

    const validate = () =>{
        let errors = {}
        if (!firstname || !lastname){
            errors.nickname = 'Поля не можуть бути пусті'
        }else if(!validateUsername(firstname+lastname)){
            errors.nickname = 'Некоректні дані(формат Firstname Lastname)'
        }
        if (!email){
            errors.email = 'Поле не може бути пустим'
        }else if (!validateEmail(email)){
            errors.email = 'Некоректний email'
        }
        if (!password){
            errors.password = 'Поле не може бути пустим'
        }else if(password.length < 8){
            errors.password = 'Пароль повинен містити 8 і більше символів'
        }
        if (!phoneNumber){
            errors.phone = 'Поле не може бути пустим'
        }else if(!validatePhoneNumber(phoneNumber)){
            errors.phone = 'Повинен містити тільки цифри(9 цифр)'
        }
        return errors
    }
    return (
        <AuthLayout>
            <div className={'register'}>
                <form onSubmit={handleSubmit} className={'register__content'}>
                    <div className={'register__title'}>
                        Регистрация
                    </div>
                    <div className={'register__fields'}>
                        <div className={'register__fieldsHorizontally'}>
                            <Input onChange={(e)=>{setFirstname(e.target.value)}}
                                   type={'text'}
                                   title={'Имя'}
                                   placeholder={'Введите имя'}
                                   style={{marginTop:0, width:192}}/>
                            <Input onChange={(e)=>{setLastname(e.target.value)}}
                                   type={'text'}
                                   title={'Фамилия'}
                                   placeholder={'Введите фамилию'}
                                   style={{marginTop:0, width:192}}/>
                        </div>
                        {errors.nickname && <div className={'register__error'}>{Object.keys(errors).length}</div>}
                        <Input onChange={(e)=>{setPhoneNumber(e.target.value)}}
                               title={'Телефон'}
                               placeholder={'Введите номер телефона'}
                               style={{marginTop:24}}/>
                        <div className={'register__hint'}>
                            *Номер телефона должен быть введен в международном формате
                        </div>
                        {errors.phone && <div className={'register__error'}>{errors.phone}</div>}
                        <Input onChange={(e)=>{setEmail(e.target.value)}}
                               title={'Электронный адрес'}
                               placeholder={'Введите адрес эл. почты'}
                               style={{marginTop:24}}/>
                        {errors.email && <div className={'register__error'}>{errors.email}</div>}
                        <Input onChange={(e)=>{setPassword(e.target.value)}}
                               title={'Пароль'}
                               placeholder={'Введите пароль'}
                               style={{marginTop:24}}/>
                        {errors.password && <div className={'register__error'}>{errors.password}</div>}
                    </div>
                    <div className={'register__checkbox'}>
                        <input className={'register__checkboxItem'} type={"checkbox"}/>
                        Я принимаю условия <span style={{color:'#1343EA'}}><b>пользовательского соглашения</b></span>
                    </div>
                    <input type={'submit'} className={'register__button'} value={'Зарегистрироваться'}/>
                    {/*    Зарегистрироваться*/}
                    {/*</input>*/}
                    <div className={'register__text'}>
                        Есть аккаунт? <Link style={{ textDecoration: 'none', color:'black' }} to={'/login'}><b>Войти</b></Link>
                    </div>
                </form>
                <div className={'login__footer'}>
                    © 2021 WildBest
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;