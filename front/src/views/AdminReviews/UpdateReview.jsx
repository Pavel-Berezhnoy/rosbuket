import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { api } from '../../api/api.get';
import AnswerItem from '../../components/admin/components/answerItem/AnswerItem';
import InsertUpdateForm from '../../components/admin/form/InsertUpdateForm';
import { openMessage, OpenModal } from '../../components/messages/SuccessMessage';

export default function UpdateReview() {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const message = useContext(OpenModal);
  useEffect(() => {
    (async () => {
      const response = await api.get(`/api/admin/review/${id}`);
      setReview(response.data);
    })();
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await api.postJson("/api/admin/review?_method=PUT", review);
    if (response.status === 200) message.setOpenedState(openMessage('Отзыв сохранен, теперь он появится на странице'));
  }
  return (
    <>
      <InsertUpdateForm titleAdd="" titleUpdate="Валидация отзыва" submitHandle={submitHandle}>
        {review.answers?.length
          ? <>
            <label className="font-semibold leading-none">Ответы пользователей</label>
            <table className="w-full text-sm mt-4 lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell">ID</th>
                  <th className="text-left">Имя пользователя</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">Сообщение</th>
                  <th className="hidden text-right md:table-cell">Валидация</th>
                </tr>
              </thead>
              <tbody>
                {review.answers.map(answer => <AnswerItem key={answer.id} updateReview={setReview} answer={answer} />)}
              </tbody>
            </table>
          </>
          : <></>}
        {
          review.id
            ? <>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none">Имя пользователя</label>
                  <div className="leading-none text-gray-900 p-4 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" >
                    <span>{review?.username}</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Достоинства</label>
                <p className="h-64 overflow-auto text-base leading-none text-gray-900 p-8 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{review?.advantages} </p>
              </div><div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Недостатки</label>
                <p className="h-64 overflow-auto text-base leading-none text-gray-900 p-8 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{review?.disadvantages} </p>
              </div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Комментарий</label>
                <p className="h-64 overflow-auto text-base leading-none text-gray-900 p-8 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">{review?.comment} </p>
              </div>
              <div className='w-full flex flex-col mt-8'>
                <span className="text-sm lg:text-base font-medium">
                  <label htmlFor="checkbox" className="relative flex-inline items-center isolate p-4 rounded-2xl">
                    <input onChange={e => setReview({ ...review, validate: e.target.checked ? 1 : 0 })} id="checkbox" type="checkbox" value={review?.validate} checked={review?.validate} className="relative peer z-20 text-purple-600 rounded-md focus:ring-0" />
                    <span className="ml-2 relative z-20">Показать на странице</span>
                    <div className="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
                  </label>
                </span>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="mt-9 mr-4 font-semibold leading-none transition-all text-white py-4 px-10 bg-rose-300 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Сохранить
                </button>
                <Link to="/admin/reviews" className="mt-9 py-4 px-10 bg-rose-300 transition-all rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  <span className="font-semibold leading-none text-white">Отменить</span>
                </Link>
              </div>
            </>
            : <></>
        }
      </InsertUpdateForm>
    </>
  );
}
