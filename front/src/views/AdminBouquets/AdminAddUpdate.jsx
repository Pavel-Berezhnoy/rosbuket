import React, { useContext, useEffect, useState } from "react";
import InsertUpdateForm from "../../components/admin/form/InsertUpdateForm";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { api } from "../../api/api.get";
import useMultiFilter from "../../hooks/useMultiFilter";
import MultiFilter from "../../components/filters/MultiFilter";
import { Link } from "react-router-dom";
import config from "../../config/main";
import SuccessMessage from "../../components/messages/SuccessMessage";
import useMessage from "../../hooks/useMessage";
import { OpenModal } from "../../components/messages/SuccessMessage";

const AdminAddUpdateBouquet = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [bouquet, setBouquet] = useState({
        name: "",
        description: "",
        short_description: "",
        price: "",
        discount: ""
    });
    const [image, setImage] = useState();
    const [changeFile, setChangeFile] = useState();
    const multiFilter = useMultiFilter();
    const message = useContext(OpenModal);
    useEffect(() => {
        if (id) {
            (async () => {
                const response = await api.get(`/api/bouquet/${id}`);
                const bouq = response.data;
                setBouquet(bouq);
                multiFilter.setActiveItems(bouq.categories.map(category => {
                    return {
                        label: category.name,
                        value: category.id
                    }
                }));
            })();
        }
        (async () => {
            const response = await api.get("/api/category/all");
            setCategories(response.data);
        })();

    }, []);

    useEffect(() => {
        if (!changeFile) {
            return;
        }
        const objectUrl = URL.createObjectURL(changeFile);
        setImage(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [changeFile]);

    const submitHandle = async (e) => {
        e.preventDefault();
        const form = new FormData(document.forms.addUpdate);
        form.append('categories', multiFilter.activeItems.map(item => item.value));
        if (id) {
            form.append('id', id);
            await api.post("/api/admin/bouquets?_method=PUT", form);
            message.setOpenedState({
                open: true,
                text: 'Товар успешно обновлен!',
            });
        } else {
            await api.post("/api/admin/bouquets", form);
            message.setOpenedState(true);
            message.setText("Товар успешно добавлен!");
        }
    }
    return (
        <>
            <InsertUpdateForm titleAdd="Добавить товар" titleUpdate="Обновить товар" submitHandle={submitHandle}>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Название</label>
                        <input type="text" value={bouquet?.name} onChange={(e) => { bouquet ? setBouquet({ ...bouquet, name: e.target.value }) : "" }} name="name" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Категории</label>
                        <MultiFilter
                            items={categories.map(category => {
                                return {
                                    label: category.name,
                                    value: category.id
                                }
                            })}
                            activeItems={multiFilter.activeItems}
                            setActiveItem={multiFilter.setActiveItems}>

                        </MultiFilter>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-8">
                    <label className="font-semibold leading-none">Описание</label>
                    <textarea type="text" value={bouquet?.description} onChange={(e) => { bouquet ? setBouquet({ ...bouquet, description: e.target.value }) : "" }} name="description" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                </div>
                <div className="w-full flex flex-col mt-8">
                    <label className="font-semibold leading-none">Описание по короче</label>
                    <textarea type="text" value={bouquet?.short_description} onChange={(e) => { bouquet ? setBouquet({ ...bouquet, short_description: e.target.value }) : "" }} name="short_description" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Цена</label>
                        <input type="text" value={bouquet?.price} onChange={(e) => { bouquet ? setBouquet({ ...bouquet, price: e.target.value }) : "" }} name="price" pattern="^[0-9]*[.,][0-9]+$" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Скидка</label>
                        <input type="text" value={bouquet?.discount} onChange={(e) => { bouquet ? setBouquet({ ...bouquet, discount: e.target.value }) : "" }} name="discount" pattern="^[0-9]*[.,][0-9]+$" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Загрузить картинку</label>
                    <div className="flex">
                        {bouquet.image ? <img className="w-64 mr-8" src={`${config.domain}${bouquet.image}`} alt="" /> : ""}
                        {image ? <img className="w-64 mr-8" src={image} alt="" /> : ""}
                        <div className='flex items-center justify-center w-64'>
                            <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                <div className='flex flex-col items-center justify-center pt-7'>
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Выберите картинку</p>
                                </div>
                                <input onChange={(e) => setChangeFile(e.target.files[0])} required={id ? false : true} name="image" type='file' className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 mr-4 font-semibold leading-none transition-all text-white py-4 px-10 bg-rose-300 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        {id ? "Обновить" : "Добавить"}
                    </button>
                    <Link to="/admin/bouquets" className="mt-9 py-4 px-10 bg-rose-300 transition-all rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        <span className="font-semibold leading-none text-white">Отменить</span>
                    </Link>
                </div>
            </InsertUpdateForm>
        </>

    );
}

export default AdminAddUpdateBouquet;