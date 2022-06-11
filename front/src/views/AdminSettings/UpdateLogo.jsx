import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { api } from '../../api/api.get';
import config from '../../config/main';
import settingsThunk from '../../store/actions/settingsThunk';

const UpdateLogo = () => {
    const settings = useSelector(state => state.settingsReducer.settings);
    const logo = useMemo(() => settings.filter(setting => setting.type === 'logo') || [], [settings]);
    const dispatch = useDispatch();
    const [image, setImage] = useState();
    const [changeFile, setChangeFile] = useState();

    useEffect(() => {
        if (!changeFile) {
            return;
        }
        const objectUrl = URL.createObjectURL(changeFile);
        setImage(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [changeFile]);

    const updateHandle = (e) => {
        e.preventDefault();
        const formData = new FormData(document.forms.logoForm);
        formData.append('id', logo[0]?.id);
        formData.append('type', logo[0]?.type);
        dispatch(settingsThunk(
            async () => {
                setImage("");
                return await api.post('/api/admin/settings?_method=PUT', formData);
            },
            ['Логотип обновлен'])
        );
    }
    return (
        <>
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <form className="mx-5" name='logoForm' onSubmit={updateHandle}>
                        <h4 className="text-2xl font-semibold mb-4 text-gray-700">Лого</h4>
                        <img src={image ? image : config.domain + logo[0]?.value} alt="" />
                        <div className='flex items-start mt-4'>
                            <label htmlFor="logo" className='border border-solid py-2 px-4 cursor-pointer'>
                                <span>Обновить</span>
                                <input onChange={(e) => setChangeFile(e.target.files[0])} type="file" className='hidden' name="logo" id="logo" />
                            </label>
                            {image ? <button className='border border-solid hover:bg-green-700 hover:border-green-700 hover:text-white transition-all py-2 px-4'>Применить</button> : ""}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateLogo;