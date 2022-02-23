import React from 'react';
import './Button.scss'

const Button = ({text, width}) => {
    return (
        <button style={{width:width}} className={'button'}>
            {text}
        </button>
    );
};

export default Button;