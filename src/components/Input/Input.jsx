import React from 'react';
import './Input.scss'

const Input = ({title, type, placeholder, width, height}) => {
    return (
        <div style={{width:width, height:height}} className={'input'} >
            <div className={'input__title'}>
                {title}
            </div>
            <input  type={type} className={'input__field'} placeholder={placeholder}/>
        </div>
    );
};

export default Input;