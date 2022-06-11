import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../api/api.get';
import settingsThunk from '../../store/actions/settingsThunk';
import { submitThunk } from '../../store/actions/submitThunk';
import SettingItem from './SettingItem';

const Phones = () => {
    const settings = useSelector(state => state.settingsReducer.settings);
    const phones = settings.filter(setting => setting.type === 'phone');
    const [insert, setInsert] = useState(false);
    const dispatch = useDispatch();
    const [phone, setPhone] = useState({
        type: 'phone',
        value: "",
        name: "Телефон"
    });

    const addHandle = async () => {
        dispatch(
            settingsThunk(
                async () => {
                    setInsert(false);
                    setPhone({ ...phone, value: "" })
                    return await api.postJson('/api/admin/settings', phone)
                },
                ["Настройка добавлена!"]
            )
        );
    }
    return (
        <>
            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <div className="px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold mb-4 text-gray-700">Телефоны</h4>
                        {phones.length > 0 ? phones.map(phone => <SettingItem key={phone.id} item={phone} />) : ""}
                    </div>
                    {insert ?
                        <div className='mx-5'>
                            <input type="text" value={phone.value} onChange={(e) => setPhone({ ...phone, value: e.target.value })} name="phone" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border border-gray-200" />
                            <div className='flex mt-4 flex-wrap md:flex-nowrap'>
                                <button onClick={() => addHandle()} className='border border-solid hover:bg-green-700 hover:border-green-700 hover:text-white transition-all py-2 px-4'>Добавить</button>
                                <button onClick={() => setInsert(false)} className='border border-solid ml-2 hover:bg-red-700 hover:border-red-700 hover:text-white transition-all py-2 px-4'>Отменить</button>
                            </div>
                        </div> :
                        <button onClick={() => setInsert(true)} className='border border-solid ml-5 mt-4 hover:bg-green-700 hover:border-green-700 hover:text-white transition-all py-2 px-4'>Добавить</button>}
                </div>
            </div>
        </>
    )
}

export default Phones;