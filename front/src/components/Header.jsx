import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import config from '../config/main';
import cartIcon from './../assets/icons/shop-icon.png';

function Header() {
    const [mobileOpened, setMobileOpened] = useState(false);
    const cart = useSelector(state => state.cartReducer.cart) || [];
    useEffect(() => { }, [cart]);
    const settings = useSelector(state => state.settingsReducer.settings) || [];
    const logo = useMemo(() => settings.filter(setting => setting.type === 'logo') || [], [settings]);

    const nav = [
        <NavLink activeClassName='underline' to='/catalog'>Каталог</NavLink>,
        <NavLink activeClassName='underline' to='/glossary'>Глоссарий</NavLink>,
        <NavLink activeClassName='underline' to='/delivery'>Доставка</NavLink>,
        <NavLink activeClassName='underline' to='/ask'>Задать вопрос</NavLink>,
        <NavLink activeClassName='underline' to='/contact'>Контакты</NavLink>,
        <NavLink activeClassName='underline' to='/about'>О нас</NavLink>,
        <NavLink activeClassName='underline' to='/cart'>Корзина</NavLink>,
    ]
    return (
        <header className='header'>
            <div className="flex justify-between w-full max-content">
                <div className={`fixed block md:hidden inset-y-0 ${mobileOpened ? 'left-0 right-0' : 'left-full -right-full'} transition-all z-10 bg-rose-100`}>
                    <nav className="header__nav">
                        <ul className="header__nav__list mt-4 items-center flex mx-0 flex-col">
                            {nav.map((navItem, index) => {
                                return <li onClick={() => setMobileOpened(!mobileOpened)} className='py-2' key={index}>{navItem}</li>
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <div className="header__logo">
                        <Link to={"/"}><img src={config.domain + logo[0]?.value} alt="" /></Link>
                    </div>
                </div>
                <div className="w-full flex justify-center flex-col items-end">
                    <>
                        <div onClick={() => setMobileOpened(!mobileOpened)} className='block max-w-[40px] w-full h-6 z-20 relative md:hidden'>
                            <span className='w-full top-0 h-1 bg-black absolute'></span>
                            <span className='w-full top-1/2 transform -translate-y-1/2 h-1 bg-black absolute'></span>
                            <span className='w-full bottom-0 h-1 bg-black absolute'></span>
                        </div>
                        <div className="hidden md:flex">
                            <Link to={'/cart'}>
                                <div className="header__shopping-cart">
                                    <div className="header__shopping-cart__couner">
                                        <span>{cart.length}</span>
                                    </div>
                                    <img src={cartIcon} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className=" hidden md:flex">
                            <nav className="header__nav">
                                <ul className="header__nav__list mt-4">
                                    {nav.map((navItem, index) => {
                                        return nav.length > index + 1 && <li className='px-2' key={index}>{navItem}</li>
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </>
                </div>
            </div>
        </header>
    )
}

export default Header;