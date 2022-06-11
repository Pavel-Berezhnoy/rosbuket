import React, { useEffect, useState } from "react";
import InsertUpdateForm from "../../components/admin/form/InsertUpdateForm";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api.get";
import OrderItem from "./OrderItem";
import { useDispatch } from "react-redux";
import { submitThunk } from "../../store/actions/submitThunk";

const UpdateOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const response = await api.get(`/api/admin/order/${id}`);
            setOrder(response.data);
        })();
        (() => {
            api.putJson("/api/admin/order/status", { id: id })
        })();
    }, []);

    const submitHandle = async (e) => {
        e.preventDefault();
        dispatch(submitThunk(
            async () => await api.postJson("/api/admin/orders?_method=PUT", order),
            ['Сообщение отправлено пользователю на почту!']
        ));
    }
    return (
        <InsertUpdateForm titleAdd="Добавить категорию" titleUpdate="Обработка заказа" submitHandle={submitHandle}>
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Название</th>
                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                            <span className="lg:hidden" title="Quantity">Кол.</span>
                            <span className="hidden lg:inline">Количество</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Цена за шт.</th>
                        <th className="text-right">Всего</th>
                    </tr>
                </thead>
                <tbody>
                    {order.order_items?.map(order_item => <OrderItem key={order_item.id} item={order_item}></OrderItem>)}
                </tbody>
            </table>
            <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-sm lg:text-base leading-none uppercase">Итого</label>
                    <div className="font-semibold leading-none flex flex-col text-gray-900 py-4 focus:outline-none focus:border-blue-700 mt-4" >
                        <span className="mr-4 my-4">Общее количество товаров: {order.order_items?.reduce((accumulator, order_item) => accumulator + order_item.qty, 0)} Шт.</span>
                        <span className="mr-4 my-4">Общая цена: {order.order_items?.reduce((accumulator, order_item) => accumulator + Number(order_item.count_price), 0)} Р.</span>
                    </div>
                </div>
            </div>
            <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none">ФИО пользователя</label>
                    <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                        <span>{order?.username}</span>
                    </div>
                </div>
            </div>
            <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none">Номер телефона</label>
                    <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                        <span>{order?.phone}</span>
                    </div>
                </div>
            </div>
            <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none">Адрес электронной почты</label>
                    <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                        <span>{order?.mail}</span>
                    </div>
                </div>
            </div>
            <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none">Адрес доставки</label>
                    <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                        <span>{order?.address}</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Сообщение</label>
                <p className="h-64 overflow-auto text-base leading-none text-gray-900 p-8 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{order?.message} </p>
            </div>
            <div className="flex items-center justify-center w-full">
                <button className="mt-9 mr-4 font-semibold leading-none transition-all text-white py-4 px-10 bg-rose-300 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                    {id ? "Принять заказ" : "Добавить"}
                </button>
                <Link to="/admin/orders" className="mt-9 py-4 px-10 bg-rose-300 transition-all rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                    <span className="font-semibold leading-none text-white">Отменить</span>
                </Link>
            </div>
        </InsertUpdateForm>
    );
}

export default UpdateOrder;