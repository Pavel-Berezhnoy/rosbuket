import React from 'react'
import CountReviews from './CountReviews'
import ReviewForm from './ReviewForm'

export default function Reviews() {
  return (
    <section>
      <div className="p-4 bg-gray-100"><h1 className="ml-2 font-bold text-2xl uppercase">Отзывы</h1></div>
      <div className='w-full mt-8 flex'>
        <CountReviews />
        <ReviewForm />
      </div>
    </section>
  )
}
