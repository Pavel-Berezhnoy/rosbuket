import React, { useState } from 'react'
import AnswerForm from '../../../../components/form/AnswerForm';
import CountRating from '../CountRating'
import AnswerReview from './AnswerReview';

export default function UserReview({ review }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showAnswerForm, setShowAnswerFrom] = useState(false);
  const date = new Date(review.created_at);
  return (
    <div className='px-2 my-4 border-solid border-slate-200 border-b-2'>
      <div className='flex justify-between items-center text-xl'>
        <span className='font-bold m-4'>
          {review.username}
        </span>
        <span className='text-sm'>
          {date.toLocaleDateString("ru-RU")}
        </span>
      </div>
      <div className='bg-slate-100 rounded-xl p-4'><CountRating ratingValue={review.estimate} /></div>
      <div className='flex flex-col'>
        <span className='font-bold text-lg block m-4'>
          Достоинства
        </span>
        <p className='bg-slate-100 rounded p-4'>{`${review.advantages}`}</p>
        <span className='font-bold text-lg block m-4'>
          Недостатки
        </span>
        <p className='bg-slate-100 rounded p-4'>
          {review.disadvantages}
        </p>
        {review.comment &&
          <>
            <span className='font-bold text-lg block m-4'>
              Комментарий
            </span>
            <p className='bg-slate-100 rounded p-4'>
              {review.comment}
            </p>
          </>}
      </div>
      <div className='flex justify-between'>
        {(!showAnswers && review.answers.length !== 0)
          && <button onClick={() => setShowAnswers(!showAnswers)} className='text-blue-500 underline p-4'>
            Смотреть ответы: {review.answers.length}
          </button>}
        {!showAnswerForm && <button onClick={() => setShowAnswerFrom(!showAnswerForm)} className='text-blue-500 underline p-4'>Ответить</button>}
      </div>
      {showAnswerForm && <AnswerForm showAnswerForm={setShowAnswerFrom} reviewId={review.id} />}
      {(showAnswers && review.answers.length !== 0) && review.answers.map(answer => <AnswerReview key={answer.id} answer={answer} reviewId={review.id} />)}
    </div>
  )
}
