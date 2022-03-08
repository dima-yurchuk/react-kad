import React from 'react';
import './Main.scss'
import MainLayout from "../../layouts/MainLayout";

const Main = () => {
    return (
        <MainLayout>
            <div className={'content'}>
                    <img className={'content__image'} src={'/images/main/Frame_1.png'}/>
                    <div className={'content__text'}>
                        Продвигай свой магазин в топы
                    </div>
            </div>
        </MainLayout>
    );
};

export default Main;