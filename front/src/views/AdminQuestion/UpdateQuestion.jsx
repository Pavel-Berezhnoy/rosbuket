import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { api } from '../../api/api.get';
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm';
import SuccessMessage from '../../components/messages/SuccessMessage';
import useMessage from '../../hooks/useMessage';

const UpdateQuestion = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const message = useMessage();

    useEffect(() => {
        (async () => {
            const response = await api.get(`/api/admin/question/${id}`);
            const responseQuestion = response.data;
            setQuestion(responseQuestion);
        })();
        (() => {
            api.putJson("/api/admin/question/status", { id: id })
        })();
    }, []);

    const submitHandle = async (e) => {
        e.preventDefault();
        const response = await api.putJson("/api/admin/questions", { ...question, answer: answer });
        if (response.status === 200) message.setOpened(true);
    }
    return (
        <>
            <SuccessMessage text={"Ответ отправлен на почту пользователя!"} opened={message.opened}></SuccessMessage>
            <InsertUpdateForm titleAdd="Добавить категорию" titleUpdate="Ответить на сообщение" submitHandle={submitHandle}>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">ФИО пользователя</label>
                        <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                            <span>{question?.username}</span>
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Номер телефона</label>
                        <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                            <span>{question?.phone}</span>
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Адрес электронной почты</label>
                        <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                            <span>{question?.email}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-8">
                    <label className="font-semibold leading-none">Сообщение</label>
                    <p className="h-64 overflow-auto text-base leading-none text-gray-900 p-8 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{question?.message} </p>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Ответ</label>
                        <textarea type="text" onChange={(e) => setAnswer(e.target.value)} required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 mr-4 font-semibold leading-none transition-all text-white py-4 px-10 bg-rose-300 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        {id ? "Ответить" : "Добавить"}
                    </button>
                    <Link to="/admin/questions" className="mt-9 py-4 px-10 bg-rose-300 transition-all rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        <span className="font-semibold leading-none text-white">Отменить</span>
                    </Link>
                </div>
            </InsertUpdateForm>
        </>
    )
}

export default UpdateQuestion;