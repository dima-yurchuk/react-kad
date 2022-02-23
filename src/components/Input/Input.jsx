import React from 'react';
import './Input.scss'

const Input = ({title, placeholder}) => {
    return (
        <div className={'input'}>
            <div className={'input__title'}>
                {title}
            </div>
            <input className={'input__field'} placeholder={placeholder}/>
        </div>
    );
};

export default Input;