import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { api } from '../../api/api.get'
import AdminTable from '../../components/admin/components/AdminTable'
import AdminTableBody from '../../components/admin/components/AdminTableBody'
import AdminTableBodyItem from '../../components/admin/components/AdminTableBodyItem'
import AdminTableHead from '../../components/admin/components/AdminTableHead'
import AdminTableHeadItem from '../../components/admin/components/AdminTableHeadItem'
import AdminTitile from '../../components/admin/components/AdminTitle'
import DeletePopup from '../../components/popups/DeletePopup'
import config from '../../config/main'
import useQuestionPopup from '../../hooks/useQuestionPopup'

export default function AdminFlowers() {
  const [flowers, setFlowers] = useState([]);
  const [deletedFlower, setDeletedFlower] = useState();
  const questionPopup = useQuestionPopup();
  useEffect(() => {
    (async () => {
      const response = await api.get("/api/admin/glossary");
      setFlowers(response.data);
    })()
  }, [deletedFlower]);

  const deleteFlowerHandle = async (id) => {
    questionPopup.setQuestion(true);
    await api.delete("/api/admin/glossary", { id: id });
    setDeletedFlower(id);
  }
  return (
    <>
      <AdminTitile text={"Глоссарий"} linkAdd={"/admin/glossary/add"} />
      <AdminTable>
        <AdminTableHead>
          <AdminTableHeadItem>ID</AdminTableHeadItem>
          <AdminTableHeadItem>Картинка</AdminTableHeadItem>
          <AdminTableHeadItem>Название</AdminTableHeadItem>
          <AdminTableHeadItem>Короткое описание</AdminTableHeadItem>
        </AdminTableHead>
        <AdminTableBody>
          {flowers.length ? flowers.map(item => {
            return <tr key={item.id}>
              <AdminTableBodyItem>{item.id}</AdminTableBodyItem>
              <AdminTableBodyItem><img className="max-w-[70px]" src={`${config.domain}${item.image}`} alt="" /></AdminTableBodyItem>
              <AdminTableBodyItem>{item.name}</AdminTableBodyItem>
              <AdminTableBodyItem>{item.short_description}</AdminTableBodyItem>
              <td className="px-6 py-4 relative flex whitespace-no-wrap justify-end border-b border-gray-500 text-sm leading-5">
                <Link to={`/admin/glossary/update/${item.id}`}>
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    Обновить
                  </button>
                </Link>
                <DeletePopup
                  setQuestion={questionPopup.setQuestion}
                  deleteHandle={() => deleteFlowerHandle(item.id)}
                />
              </td>
            </tr>
          }) : ""}
        </AdminTableBody>
      </AdminTable>
    </>
  )
}
