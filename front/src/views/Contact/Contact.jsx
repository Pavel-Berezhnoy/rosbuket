import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function Contact() {
    const settings = useSelector(state => state.settingsReducer.settings) || [];
    const phones = useMemo(() => settings.filter(setting => setting.type === 'phone') || [], [settings]);
    const addresses = useMemo(() => settings.filter(setting => setting.type === 'address') || [], [settings]);
    const placemarks = useMemo(() => settings.filter(setting => setting.type === 'map') || [], [settings]);
    const emails = useMemo(() => settings.filter(setting => setting.type === 'email') || [], [settings]);
    return (
        <>
            <div className="about__title">Контакты</div>
            <YMaps>
                <div className='flex my-16 w-full justify-between border-y-2 border-solid border-slate-300 py-8 lg:flex-nowrap flex-wrap'>
                    <div className='flex lg:max-w-[500px] md:flex-nowrap w-full justify-between lg:mr-8 mb-8 flex-wrap'>
                        <div className='items-baseline flex flex-col mr-8'>
                            <h2 className='text-2xl mt-8 mb-2 max-w-[200px]'>Адреса</h2>
                            {addresses?.map(address => {
                                return <div key={address.id} className='text-xl max-w-[200px] text-slate-500'><span>{address.value}</span></div>
                            })}
                            <h2 className='text-2xl mt-8 mb-2'>Телефоны</h2>
                            {phones?.map(phone => {
                                return <div key={phone.id} className="text-xl"><a rel="nofollow" href="tel:+79503896415">{phone.value}</a></div>
                            })}
                            <div><Link to={"/ask"} className='bg-pink-300 hover:bg-pink-500 transition-all py-4 px-8 mt-4 block'><span className='font-bold text-center text-white'>Написать сообщение</span></Link></div>
                        </div>
                        <div className='items-end flex flex-col '>
                            <h2 className='text-2xl mt-8 mb-2 text-right max-w-[200px]'>Почта</h2>
                            {emails?.map(email => {
                                return <div key={email.id} className='text-xl max-w-[200px] text-slate-500'><span>{email.value}</span></div>
                            })}
                            <h2 className='text-2xl mt-8 mb-2 max-w-[200px]'>Режим работы</h2>
                            <div className='text-xl max-w-[200px] text-slate-500'><span>Пн-пт, с 9:00 до 20:00</span></div>
                        </div>
                    </div>
                    <div className='lg:max-w-[700px] w-full'>
                        <Map width={"100%"} height={"500px"} defaultState={{ center: [47.284153, 39.715058], zoom: 15 }}>
                            {placemarks?.map(mark => {
                                return <Placemark key={mark.id} geometry={mark.value.split(" ")}></Placemark>
                            })}
                        </Map>
                    </div>
                </div>
            </YMaps>
        </>
    );
}

export default Contact;