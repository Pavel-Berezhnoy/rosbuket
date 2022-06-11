import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api/api.get";
import { cartSubmitThunk } from "../../store/actions/cartThunk";
import { cartClear } from "../../store/reducers/CartReducer";

const OrderForm = () => {
    const [userData, setUserData] = useState({
        username: "",
        phone: "",
        mail: "",
        address: "",
        message: ""
    });
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart) || [];
    const messageType = useSelector(state => state.messageReducer.type);

    const submitHandle = async (e) => {
        e.preventDefault();
        const submitData = { ...userData, order_items: cart };
        dispatch(cartSubmitThunk(async () => await api.postJson("/api/cart", submitData), ['Заказ успешно создан!']));
    }
    return (
        <>
            <div className="p-4 bg-gray-100">
                <h1 className="ml-2 font-bold uppercase">Оформить заказ</h1>
            </div>
            <div className="md:p-4">
                <div className="w-full">
                    <div className="bg-white h-80"></div>
                    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                        <div className="bg-white w-full rounded md:p-8 py-4 sm:p-12 -mt-72">
                            <form action="" onSubmit={submitHandle}>
                                <div className="md:flex items-center">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none">ФИО</label>
                                        <input type="text" required name="username" onChange={(e) => setUserData({ ...userData, username: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label className="font-semibold leading-none">Телефон</label>
                                        <input type="text" required onChange={(e) => setUserData({ ...userData, phone: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none">Почта</label>
                                        <input type="email" required onChange={(e) => setUserData({ ...userData, mail: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none">Адрес</label>
                                        <input type="text" required onChange={(e) => setUserData({ ...userData, address: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="font-semibold leading-none">Сообщение</label>
                                        <textarea type="text" onChange={(e) => setUserData({ ...userData, message: e.target.value })} className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 transition-all font-semibold leading-none text-white py-4 px-10 bg-rose-300 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Заказать
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default React.memo(OrderForm);