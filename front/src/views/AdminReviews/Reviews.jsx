import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api.get";
import AdminTable from "../../components/admin/components/AdminTable";
import AdminTableBodyItem from "../../components/admin/components/AdminTableBodyItem";
import AdminTableHead from "../../components/admin/components/AdminTableHead";
import AdminTableHeadItem from "../../components/admin/components/AdminTableHeadItem";
import AdminTableBody from "../../components/admin/components/AdminTableBody";
import useQuestionPopup from "../../hooks/useQuestionPopup";
import DeletePopup from "../../components/popups/DeletePopup";
import { useDispatch, useSelector } from "react-redux";
import CountRating from "../BouquetDetail/reviews/CountRating";
import { deleteReview } from "../../store/reducers/AdminReviewsReducer";

const Reviews = () => {
  const reviews = useSelector(state => state.adminReviewsReducer.reviews);
  const questionPopup = useQuestionPopup();
  const dispatch = useDispatch();

  const status = new Map([
    ['0', 'Ожидает валидацию'],
    ['1', 'Прошло валидацию']
  ]);

  const deleteHandle = async (id) => {
    questionPopup.setQuestion(true);
    dispatch(deleteReview(id));
    await api.delete("/api/admin/review", { id: id });
  }
  return (
    <>
      <h2 className="text-4xl font-bold my-12">Обзоры</h2>
      <AdminTable>
        <AdminTableHead>
          <AdminTableHeadItem>ID</AdminTableHeadItem>
          <AdminTableHeadItem>Имя пользователя</AdminTableHeadItem>
          <AdminTableHeadItem>Оценка</AdminTableHeadItem>
          <AdminTableHeadItem>Статус</AdminTableHeadItem>
          <AdminTableHeadItem>Товар</AdminTableHeadItem>
        </AdminTableHead>
        <AdminTableBody>
          {reviews.length ? reviews.map(item => {
            return <tr key={item.id}>
              <AdminTableBodyItem>{item.id}</AdminTableBodyItem>
              <AdminTableBodyItem>{item.username}</AdminTableBodyItem>
              <AdminTableBodyItem><CountRating ratingValue={item.estimate} /></AdminTableBodyItem>
              <AdminTableBodyItem>{status.get(item.validate.toString())}</AdminTableBodyItem>
              <AdminTableBodyItem>{item.bouquet.name}</AdminTableBodyItem>
              <td className="px-6 py-4 relative flex whitespace-no-wrap justify-end border-b border-gray-500 text-sm leading-5">
                <Link to={`/admin/review/update/${item.id}`}>
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    Посмотреть
                  </button>
                </Link>
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

export default Reviews;