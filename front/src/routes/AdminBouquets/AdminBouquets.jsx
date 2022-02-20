import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api.get";
import AdminTable from "../../components/admin/components/AdminTable";
import AdminTitile from "../../components/admin/components/AdminTitle";
import AdminTableBodyItem from "../../components/admin/components/AdminTableBodyItem";
import AdminTableHead from "../../components/admin/components/AdminTableHead";
import AdminTableHeadItem from "../../components/admin/components/AdminTableHeadItem";
import AdminTableBody from "../../components/admin/components/AdminTableBody";
import config from "../../config/main";
import useQuestionPopup from "../../hooks/useQuestionPopup";
import DeletePopup from "../../components/popups/DeletePopup";

const AdminBouquets = () => {
    const [bouquets, setBouquets] = useState([]);
    const [deleteBouquet, setDeleteBouquet] = useState();
    const questionPopup = useQuestionPopup();
    useEffect(() => {
        (async () => {
            const response = await api.get("/api/admin/bouquets");
            setBouquets(response.data);
        })()
    }, [deleteBouquet]);
    const deleteHandle = async (id) => {
        questionPopup.setQuestion(true);
        await api.delete("/api/admin/bouquets", { id: id });
        setDeleteBouquet(id);
    }
    return (
        <>
            <AdminTitile text={"Товары"} linkAdd={"/admin/bouquet/add"}></AdminTitile>
            <AdminTable>
                <AdminTableHead>
                    <AdminTableHeadItem>ID</AdminTableHeadItem>
                    <AdminTableHeadItem>Картинка</AdminTableHeadItem>
                    <AdminTableHeadItem>Название</AdminTableHeadItem>
                    <AdminTableHeadItem>Цена</AdminTableHeadItem>
                    <AdminTableHeadItem>Скидка</AdminTableHeadItem>
                </AdminTableHead>
                <AdminTableBody>
                    {bouquets.length > 0 ? bouquets.map(item => {
                        return <tr key={item.id}>
                            <AdminTableBodyItem>{item.id}</AdminTableBodyItem>
                            <AdminTableBodyItem><img className="max-w-[70px]" src={`${config.domain}${item.image}`} alt="" /></AdminTableBodyItem>
                            <AdminTableBodyItem>{item.name}</AdminTableBodyItem>
                            <AdminTableBodyItem>{item.price} Р</AdminTableBodyItem>
                            <AdminTableBodyItem>{item.discount ? item.discount : 0} Р</AdminTableBodyItem>
                            <td className="px-6 py-4 relative flex whitespace-no-wrap justify-end border-b border-gray-500 text-sm leading-5">
                                <Link to={`/admin/bouquet/update/${item.id}`}><button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Обновить</button></Link>
                                <DeletePopup
                                    setQuestion={questionPopup.setQuestion}
                                    deleteHandle={() => deleteHandle(item.id)}>
                                </DeletePopup>
                            </td>
                        </tr>
                    }) : ""}
                </AdminTableBody>
            </AdminTable>
        </>
    );
}

export default AdminBouquets;