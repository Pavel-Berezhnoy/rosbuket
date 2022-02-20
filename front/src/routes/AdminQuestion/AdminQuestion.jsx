import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api.get";
import AdminTable from "../../components/admin/components/AdminTable";
import AdminTableBodyItem from "../../components/admin/components/AdminTableBodyItem";
import AdminTableHead from "../../components/admin/components/AdminTableHead";
import AdminTableHeadItem from "../../components/admin/components/AdminTableHeadItem";
import AdminTableBody from "../../components/admin/components/AdminTableBody";

const AdminQuestions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get("/api/admin/questions");
            setQuestions(response.data);
        })()
    }, []);
    return (
        <>
            <h2 className="text-4xl font-bold my-12">Сообщения пользователей</h2>
            <AdminTable>
                <AdminTableHead>
                    <AdminTableHeadItem>ID</AdminTableHeadItem>
                    <AdminTableHeadItem>ФИО пользователя</AdminTableHeadItem>
                    <AdminTableHeadItem>Телефон пользователя</AdminTableHeadItem>
                    <AdminTableHeadItem>Эл. почта пользователя</AdminTableHeadItem>
                    <AdminTableHeadItem>Статус</AdminTableHeadItem>
                </AdminTableHead>
                <AdminTableBody>
                    {questions.length > 0 ? questions.map(question => {
                        return <tr key={question.id}>
                            <AdminTableBodyItem>{question.id}</AdminTableBodyItem>
                            <AdminTableBodyItem>{question.username}</AdminTableBodyItem>
                            <AdminTableBodyItem>{question.phone}</AdminTableBodyItem>
                            <AdminTableBodyItem>{question.email}</AdminTableBodyItem>
                            <AdminTableBodyItem>{question.status}</AdminTableBodyItem>
                            <td className="px-6 py-4 flex relative whitespace-no-wrap justify-end border-b border-gray-500 text-sm leading-5">
                                <Link to={`/admin/question/update/${question.id}`}><button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Ответить</button></Link>
                            </td>
                        </tr>
                    }) : ""}
                </AdminTableBody>
            </AdminTable>
        </>
    );
}

export default AdminQuestions;