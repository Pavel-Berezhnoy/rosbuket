import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapBlock = () => {
    const settings = useSelector(state => state.settingsReducer.settings) || [];
    const phones = useMemo(() => settings.filter(setting => setting.type === 'phone') || [], [settings]);
    const addresses = useMemo(() => settings.filter(setting => setting.type === 'address') || [], [settings]);
    const placemarks = useMemo(() => settings.filter(setting => setting.type === 'map') || [], [settings]);
    return (
        <YMaps>
            <div className='flex flex-wrap'>
                <div className='max-w-[600px] w-full mr-8'>
                    <Map width={"100%"} height={"300px"} defaultState={{ center: [47.284153, 39.715058], zoom: 15 }}>
                        {placemarks?.map(mark => {
                            return <Placemark key={mark.id} geometry={mark.value.split(" ")}></Placemark>
                        })}
                    </Map>
                </div>
                <div className='flex flex-col items-baseline'>
                    {addresses?.map(address => {
                        return <h2 key={address.id} className='text-2xl my-8 max-w-[300px]'>{address.value}</h2>
                    })}
                    
                    <h2 className='text-2xl mt-8 mb-2'>Телефоны</h2>
                    {phones?.map(phone => {
                        return <div key={phone.id} className="text-xl"><a rel="nofollow" href="tel:+79503896415">{phone.value}</a></div>
                    })}
                    <div><Link to={"/contact"} className='bg-pink-300 hover:bg-pink-500 transition-all py-4 px-8 mt-4 block'><span className='font-bold text-white'>Подробнее</span></Link></div>
                </div>
            </div>
        </YMaps>
    )
}

export default MapBlock;