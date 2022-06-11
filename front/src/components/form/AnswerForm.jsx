import React from 'react'
import { useDispatch } from 'react-redux';
import { api } from '../../api/api.get';
import { submitThunk } from '../../store/actions/submitThunk';

export default function AnswerForm({ showAnswerForm, reviewId, answerId }) {

  const dispatch = useDispatch();

  const submitAnswerHandle = async e => {
    e.preventDefault();
    const form = new FormData(document.forms[`form${answerId ? `answer${answerId}` : `review${reviewId}`}`]);
    if (answerId) form.set('answer_id', answerId);
    form.set('review_id', reviewId);
    dispatch(submitThunk(async () => await api.post(`api/answer`, form), ['Ответ отправлен! Он появится, как только пройдет модерацию.']));
  }

  return (
    <form className='ml-16' onSubmit={submitAnswerHandle} name={`form${answerId ? `answer${answerId}` : `review${reviewId}`}`}>
      <div className='flex justify-between mt-8'>
        <div className="w-full flex flex-col">
          <label className="font-semibold leading-none">Имя*</label>
          <input type="text" required name='username' className="max-w-[300px] leading-none text-gray-900 p-3 focus:outline-none focus:border-none mt-4 bg-gray-100 border rounded border-gray-200" />
        </div>
        <span onClick={() => showAnswerForm(false)} className='w-8 h-8 cursor-pointer'>
          <svg viewBox="0 0 32 32"><defs></defs><title /><g id="cross"><line fill='none' stroke='#000' strokeWidth='2px' strokeLinejoin='round' strokeLinecap='round' x1="7" x2="25" y1="7" y2="25" /><line fill='none' stroke='#000' strokeWidth='2px' strokeLinejoin='round' strokeLinecap='round' x1="7" x2="25" y1="25" y2="7" /></g></svg>
        </span>
      </div>
      <div className="w-full flex flex-col mb-4">
        <label className="font-semibold leading-none mb-4">Сообщение*</label>
        <div className='flex w-full items-center'>
          <textarea type="text" name='message' required className="h-10 mr-4 w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          <svg className='cursor-pointer' onClick={submitAnswerHandle} version="1.1" id="Layer_1" x="0px" y="0px" width='36px' viewBox="0 0 24 24">
            <g id="surface1">
              <path fill='rgb(59 130 246)' d="M2,3v7.8L18,12L2,13.2V21l20-9L2,3z" />
            </g>
            <rect fill='none' width="24" height="24" />
          </svg>
        </div>
      </div>
    </form>
  )
}
