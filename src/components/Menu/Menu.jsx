import React from 'react';
import './Menu.scss'
import MenuItem from "./MenuItem/MenuItem";
import {Link} from "react-router-dom";

const MENU_ITEMS1 = [
    {
        image: 'credit_card_black_24dp',
        text: 'Выкупы'
    },
    {
        image: 'local_shipping_black_24dp',
        text: 'Доставка'
    },
    {
        image: 'feedback_black_24dp',
        text: 'Озывы'
    },
    {
        image: 'favorite_black_24dp',
        text: 'Любимые бренды'
    },
    {
        image: 'help_black_24dp',
        text: 'Вопросы под товаром'
    },
    {
        image: 'star_black_24dp',
        text: 'Добавление в избранное'
    },
    {
        image: 'shopping_cart_black_24dp',
        text: 'Добавление в корзину'
    },
    {
        image: 'watch_later_black_24dp',
        text: 'Добавить в лист ожидания'
    },
    {
        image: 'thumb_up_black_24dp',
        text: 'Лайки на отзывы'
    }
]
const MENU_ITEMS2 = [
    {
        image: 'account_balance_wallet_black_24dp',
        text: 'Финансы'
    },
    {
        image: 'inventory_2_black_24dp',
        text: 'Архив'
    },
    {
        image: 'Frame_1082',
        text: 'Реферальная программа'
    }
]
const Menu = () => {
    return (
        <div className={'menu'}>
            <div className={'menu__userData'}>
                <div className={'menu__username'}>
                   <Link to={'/login'}>
                       Пётр Романов
                   </Link>
                </div>
                <img src={'/images/menu/settings_black_24.png'}/>
            </div>
            <div className={'menu__userId'}>
                ID: 09061672
            </div>
            <div className={'menu__WCoin'}>
                <div className={'menu__WCoinContent'}>
                    <div className={'menu__WCoinText'}>
                        <img src={'/images/menu/w-coin.png'}/>
                        <div>
                            <div className={'menu__WCoinTitle'}>
                                W-coin
                            </div>
                            <div className={'menu__WCoinPrice'}>
                                27 344
                            </div>
                        </div>
                    </div>
                    <img src={'/images/menu/add_circle_black_24.png'}/>
                </div>
            </div>
            <div className={'menu__balance'}>
                <div className={'menu__balanceContent'}>
                    <div className={'menu__balanceText'}>
                        <div>
                            <div className={'menu__WCoinTitle'}>
                                Баланс на выкуп
                            </div>
                            <div className={'menu__WCoinPrice'}>
                                27 344 ₽
                            </div>
                        </div>
                    </div>
                    <img src={'/images/menu/add_circle_black_24.png'}/>
                </div>
            </div>
            <button className={'menu__button'}>
                Пополнить баланс
            </button>
            <div className={'menu__tips'}>
                <label className="checkbox-ios">
                    <input type="checkbox"/>
                    <span className="checkbox-ios-switch"></span>
                </label>
                <div className={'menu__tipsText'}>
                    Включить подсказки
                </div>
            </div>
            <div className={'menu__items'}>
                <div className={'menu__block1'}>
                    <div className={'menu__block1Title'}>
                        Услуги
                    </div>
                    <div className={'menu__block1Items'}>
                        {MENU_ITEMS1.map(({image, text}) => <MenuItem image={`/images/menu/menuItems/${image}.png`}
                                                                      text={text}/>)}
                    </div>
                </div>
                <div className={'menu__block2'}>
                    <div className={'menu__block2Title'}>
                        Услуги
                    </div>
                    <div className={'menu__block2Items'}>
                        {MENU_ITEMS2.map(({image, text}) => <MenuItem image={`/images/menu/menuItems/${image}.png`}
                                                                      text={text}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;