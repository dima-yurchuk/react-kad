import React from 'react';
import './MenuItem.scss'

const MenuItem = ({image, text}) => {
    return (
        <div className={'menuItem'}>
            <img src={image}/>
            <div className={'menuItem__text'}>
                {text}
            </div>
        </div>
    );
};

export default MenuItem;