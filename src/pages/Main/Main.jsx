import React from 'react';
import './Main.scss'
import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/AuthLayout";

const Main = () => {
    return (
        <AuthLayout>
            <div className={'content'}>
                    <img className={'content__image'} src={'/images/main/Frame_1.png'}/>
                    <div className={'content__text'}>
                        Продвигай свой магазин в топы
                    </div>
            </div>
        </AuthLayout>
    );
};

export default Main;