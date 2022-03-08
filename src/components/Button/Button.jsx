import React from 'react';
import './Button.scss'

const Button = ({text, style, isBlue}) => {
    return (
        <button style={style} className={isBlue ? 'buttonBlue' : 'button'}>
            {text}
        </button>
    );
};

export default Button;
