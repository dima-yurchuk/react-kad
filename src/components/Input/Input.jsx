import React from 'react';
import './Input.scss'

const Input = ({title, type, placeholder, style, onChange}) => {
    return (
        <div style={style} className={'input'} >
            <div className={'input__title'}>
                {title}
            </div>
            <input onChange={onChange} type={type} className={'input__field'} placeholder={placeholder}/>
        </div>
    );
};

export default Input;