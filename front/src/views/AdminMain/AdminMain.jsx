import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api.get';
import AdminTable from '../../components/admin/components/AdminTable';
import AdminTableBody from '../../components/admin/components/AdminTableBody';
import AdminTableBodyItem from '../../components/admin/components/AdminTableBodyItem';
import AdminTableHead from '../../components/admin/components/AdminTableHead';
import AdminTableHeadItem from '../../components/admin/components/AdminTableHeadItem';

const AdminMain = () => {
    const [statistic, setStatistic] = useState();
    useEffect(() => {
        (async () => {
            const response = await api.get('/api/admin/main');
            setStatistic(response.data);
        })();
    }, []);
    return (
        <>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container mx-auto px-6 py-8">
                    <h3 className="text-gray-700 text-3xl font-medium">Главная</h3>
                    <div className="mt-4">
                        <div className="flex flex-wrap -mx-6">
                            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                        <svg version="1.1" className="text-white h-8 w-8 transition-all hover:text-gray-300 fill-current" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 612.074 612.074">
                                            <g>
                                                <path d="M306.037,0C136.997,0,0,136.997,0,306.037s136.997,306.037,306.037,306.037s306.037-136.997,306.037-306.037
                                                    S474.261,0,306.037,0z M306.037,582.405c-152.203,0-276.368-124.165-276.368-276.368S153.019,29.669,306.037,29.669
                                                    s276.368,124.165,276.368,276.368S458.24,582.405,306.037,582.405z M318.869,454.234c0,8.827-7.195,16.021-16.021,16.021
                                                    c-8.827,0-16.021-7.195-16.021-16.021c0-8.827,7.195-16.021,16.021-16.021C311.6,438.213,318.869,445.408,318.869,454.234z
                                                    M385.328,236.315c0,28.037-16.021,53.701-45.69,71.28c-21.658,12.832-20.843,28.037-20.843,28.853c0,0,0,0.816,0,1.632v36.864
                                                    c0,8.011-6.379,14.39-14.39,14.39s-15.205-6.379-15.205-14.39v-36.048c-0.816-12.832,5.637-37.68,34.416-55.259
                                                    c14.39-8.827,31.227-24.032,31.227-46.432c0-27.221-22.4-49.696-49.696-49.696c-27.296,0-49.696,22.4-49.696,49.696
                                                    c0,8.011-6.379,14.39-14.39,14.39s-14.39-6.379-14.39-14.39c0-44.059,35.232-79.291,79.291-79.291S385.328,192.256,385.328,236.315
                                                    z"/>
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="mx-5">
                                        <h4 className="text-2xl font-semibold text-gray-700">{statistic?.countQuestions}</h4>
                                        <div className="text-gray-500">Количество вопросов</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                                        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>

                                    <div className="mx-5">
                                        <h4 className="text-2xl font-semibold text-gray-700">{statistic?.countOrders}</h4>
                                        <div className="text-gray-500">Количество заказов</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                                                stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                            <path
                                                d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                                                stroke="currentColor" strokeWidth="2"></path>
                                        </svg>
                                    </div>

                                    <div className="mx-5">
                                        <h4 className="text-2xl font-semibold text-gray-700">{statistic?.countProducts}</h4>
                                        <div className="text-gray-500">Количество товаров</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <h3 className="text-gray-700 text-3xl font-medium mb-8 mt-16">Последние заказы</h3>
                            <div
                                className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <AdminTable>
                                    <AdminTableHead>
                                        <AdminTableHeadItem>ID</AdminTableHeadItem>
                                        <AdminTableHeadItem>ФИО пользователя</AdminTableHeadItem>
                                        <AdminTableHeadItem>Телефон пользователя</AdminTableHeadItem>
                                        <AdminTableHeadItem>Эл. почта пользователя</AdminTableHeadItem>
                                        <AdminTableHeadItem>Статус</AdminTableHeadItem>
                                    </AdminTableHead>
                                    <AdminTableBody>
                                        {statistic?.lastOrders.length > 0 ? statistic.lastOrders.map(item => {
                                            return <tr key={item.id}>
                                                <AdminTableBodyItem>{item.id}</AdminTableBodyItem>
                                                <AdminTableBodyItem>{item.username}</AdminTableBodyItem>
                                                <AdminTableBodyItem>{item.phone}</AdminTableBodyItem>
                                                <AdminTableBodyItem>{item.mail}</AdminTableBodyItem>
                                                <AdminTableBodyItem>{item.status}</AdminTableBodyItem>
                                                <td className="px-6 py-4 flex relative whitespace-no-wrap justify-end border-b border-gray-500 text-sm leading-5">
                                                    <Link to={`/admin/order/update/${item.id}`}><button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Обработать заказ</button></Link>
                                                </td>
                                            </tr>
                                        }) : ""}
                                    </AdminTableBody>
                                </AdminTable>
                            </div>
                        </div>
                    </div>
                </div>
            </main></>
    )
}

export default AdminMain;