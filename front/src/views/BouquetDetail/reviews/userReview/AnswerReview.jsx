import React, { useState } from 'react'
import AnswerForm from '../../../../components/form/AnswerForm'

export default function AnswerReview({ answer, reviewId }) {
  const [showAnswerForm, setShowAnswerFrom] = useState(false);
  const date = new Date(answer?.created_at);
  return (
    <div className='flex flex-col items-baseline ml-16 pl-2 border-solid border-slate-200 border-l-2 mb-8'>
      <div className='w-full flex justify-between'>
        <span className='font-bold text-lg'>{answer.username}</span>
        <span>{date.toLocaleDateString("ru-RU")}</span>
      </div>
      <p className='text-lg'>
        <span className='font-bold'>
          {answer.answer?.username ? answer.answer?.username + ',' : ''}
        </span>
        {answer.message}
      </p>
      {!showAnswerForm && <button onClick={() => setShowAnswerFrom(!showAnswerForm)} className='text-blue-500 underline p-4'>Ответить</button>}
      {showAnswerForm && <div className='self-stretch'>
        <AnswerForm reviewId={reviewId} answerId={answer?.id} />
      </div>}
    </div>
  )
}
