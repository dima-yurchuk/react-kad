import React from 'react';
import './Input.scss'

const Input = ({title, type, placeholder, style}) => {
    return (
        <div style={style} className={'input'} >
            <div className={'input__title'}>
                {title}
            </div>
            <input  type={type} className={'input__field'} placeholder={placeholder}/>
        </div>
    );
};

export default Input;