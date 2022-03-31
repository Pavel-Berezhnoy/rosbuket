import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../api/api.get';
import SuccessMessage from '../../components/messages/SuccessMessage';
import useMessage from '../../hooks/useMessage';
import settingsThunk from '../../store/actions/settingsThunk';
import SettingItem from './SettingItem';

const Addresses = () => {
    const settings = useSelector(state => state.settingsReducer.settings);
    const addresses = useMemo(() => settings.filter(setting => setting.type === 'address') || [], [settings]);
    const [insert, setInsert] = useState(false);
    const dispatch = useDispatch();
    const message = useMessage();
    const [address, setAddress] = useState({
        type: 'address',
        value: "",
        name: "Адрес"
    });

    const addHandle = async () => {
        if (address.value.length > 8) {
            dispatch(settingsThunk(async () => {
                setInsert(false);
                setAddress({...address, value: ""})
                message.setOpened(true);
                return await api.postJson('/api/admin/settings', address);
            }));
        }
    }
    return (
        <>
            <SuccessMessage text={"Настройка добавлена!"} opened={message.opened}></SuccessMessage>
            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <div className="px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold mb-4 text-gray-700">Адреса</h4>
                        {addresses.length > 0 ? addresses.map(address => <SettingItem key={address.id} item={address}></SettingItem>) : ""}
                    </div>
                    {insert ?
                        <div className='mx-5'>
                            <input type="text" value={address.value} onChange={(e) => setAddress({ ...address, value: e.target.value })} name="address" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border border-gray-200" />
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

export default Addresses;