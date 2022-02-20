import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {
    const settings = useSelector(state => state.settingsReducer.settings) || [];
    const phones = useMemo(() => settings.filter(setting => setting.type === 'phone') || [], [settings]);
    const addresses = useMemo(() => settings.filter(setting => setting.type === 'address') || [], [settings]);
    const emails = useMemo(() => settings.filter(setting => setting.type === 'email') || [], [settings]);
    return (
        <footer className="footer">
            <div className="footer__wrapper max-content">
                <div className="footer__contact-info ">
                    <div className="footer__left-content">
                        <nav className="footer__nav">
                            <ul className="footer__nav__list">
                                <li><Link to='/delivery'>Доставка</Link></li>
                                <li><Link to='/ask'>Задать вопрос</Link></li>
                                <li><Link to='/contact'>Контакты</Link></li>
                                <li><Link to='/about'>О нас</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__right-content">
                        <ul className="footer__contact">
                            <li className='flex'>
                                <div className='font-bold'>Телефоны:</div>
                                <div className='ml-4'>
                                    {phones?.map(phone => {
                                        return <h3 className='pb-2' key={phone.id}><a rel='nofollow' href="tel:">{phone.value}</a></h3>
                                    })}
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='font-bold'>E-mail:</div>
                                <div className='ml-4'>
                                    {emails?.map(email => {
                                        return <h3 className='pb-2' key={email.id}>{email.value}</h3>
                                    })}
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='font-bold'>Адреса:</div>
                                <div className='ml-4'>
                                    {addresses?.map(address => {
                                        return <h3 className='pb-2' key={address.id}>{address.value}</h3>
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__politics-info">
                    <div className="footer__politics">
                        <span>2021 © «РосБукет», Все права защищены </span>
                        <span>Разработал студент колледжа РКРИПТ группы ПО-42 Бережной Павел</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;