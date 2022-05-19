import React from 'react'
import { api } from '../../api/api.get';

export default function AnswerForm({ reviewId, answerId }) {

  const submitAnswerHandle = async e => {
    e.preventDefault();
    const form = new FormData(document.forms[`form${answerId ? `answer${answerId}` : `review${reviewId}`}`]);
    if (answerId) form.set('answer_id', answerId);
    form.set('review_id', reviewId);
    await api.post(`api/answer`,form);
  }

  return (
    <form className='ml-16' onSubmit={submitAnswerHandle} name={`form${answerId ? `answer${answerId}` : `review${reviewId}`}`}>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Имя*</label>
        <input type="text" required name='username' className="max-w-[300px] leading-none text-gray-900 p-3 focus:outline-none focus:border-none mt-4 bg-gray-100 border rounded border-gray-200" />
      </div>
      <div className="w-full flex flex-col mb-4">
        <label className="font-semibold leading-none mb-4">Сообщение*</label>
        <div className='flex w-full items-center'>
          <textarea type="text" name='message' required className="h-10 mr-4 w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
          <svg onClick={submitAnswerHandle} version="1.1" id="Layer_1" x="0px" y="0px" width='36px' viewBox="0 0 24 24">
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
