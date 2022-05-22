import React, { useContext, useState } from "react";
import { api } from "../../api/api.get";
import SuccessMessage, { openMessage, OpenModal } from "../../components/messages/SuccessMessage";
import useMessage from "../../hooks/useMessage";

function Ask() {
    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
        message: "",
        phone: "",
    });
    const message = useContext(OpenModal);

    const submitHandle = async (e) => {
        e.preventDefault();
        const response = await api.postJson('/api/question', userdata);
        if (response.status === 200) message.setOpenedState(openMessage('Письмо успешно отправлено!'));
    }

    return (
        <div className="catalog">
            <h2 className="about__title">Задайте вопрос</h2>
            <div className="w-full mt-16">
                <div className="bg-rose-100 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Если у вас есть вопрос, Вы можете написать нам, а мы пришлем ответ на вашу почту!</p>
                        <form action="" onSubmit={submitHandle}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">ФИО</label>
                                    <input type="text" required onChange={(e) => setUserdata({ ...userdata, username: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Телефон</label>
                                    <input type="text" required onChange={(e) => setUserdata({ ...userdata, phone: e.target.value })} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Почта</label>
                                    <input type="email" onChange={(e) => setUserdata({ ...userdata, email: e.target.value })} required pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>

                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Сообщение</label>
                                    <textarea type="text" onChange={(e) => setUserdata({ ...userdata, message: e.target.value })} required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 font-semibold transition-all leading-none text-white py-4 px-10 bg-rose-300 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ask;