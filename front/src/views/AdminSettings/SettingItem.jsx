import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../api/api.get';
import SuccessMessage from '../../components/messages/SuccessMessage';
import DeletePopup from '../../components/popups/DeletePopup';
import useMessage from '../../hooks/useMessage';
import useQuestionPopup from '../../hooks/useQuestionPopup';
import settingsThunk from '../../store/actions/settingsThunk';

const SettingItem = ({ item }) => {
    const questionPopup = useQuestionPopup();
    const [update, setUpdate] = useState(false);
    const message = useMessage();
    const [updateItem, setUpdateItem] = useState({
        id: item?.id,
        type: item?.type,
        value: item?.value,
        name: item?.name
    });
    const dispatch = useDispatch();

    const updateHandle = async () => {
        if (updateItem.value.length >= 5) {
            dispatch(settingsThunk(async () => {
                setUpdate(false);
                message.setOpened(true);
                return await api.putJson('/api/admin/settings', updateItem);
            }));
        }
    }

    const deleteHandle = async () => {
        dispatch(settingsThunk(async () => {
            return await api.delete('/api/admin/settings', { id: item.id });
        }));
    }

    return (
        <>
            <SuccessMessage opened={message.opened} text="Настройка успешно обновлена"></SuccessMessage>
            <div className='flex items-center justify-between py-2'>
                {update ?
                    <div>
                        <input type="text" value={updateItem.value} onChange={(e) => setUpdateItem({ ...updateItem, value: e.target.value })} name="item" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border border-gray-200" />
                        <div className='flex flex-wrap md:flex-nowrap'>
                            <button onClick={() => updateHandle()} className='border border-solid hover:bg-green-700 hover:border-green-700 hover:text-white transition-all py-2 px-4'>Обновить</button>
                            <button onClick={() => setUpdate(false)} className='border border-solid ml-2 hover:bg-red-700 hover:border-red-700 hover:text-white transition-all py-2 px-4'>Отменить</button>
                        </div>
                    </div>
                    :
                    <span className='text-lg block max-w-max w-full overflow-hidden text-ellipsis'>{item.value}</span>}
                <div className='relative flex flex-col items-end'>
                    <button onClick={() => setUpdate(true)} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Обновить</button>
                    <DeletePopup
                        setQuestion={questionPopup.setQuestion}
                        deleteHandle={() => deleteHandle(item.id)}>
                    </DeletePopup>
                </div>
            </div>
        </>
    )
}

export default SettingItem;