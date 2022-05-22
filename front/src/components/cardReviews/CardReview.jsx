import React from 'react'

export default function CardReview({ ratingValue }) {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className='flex my-2'>
      {ratings.map(ratingItem => <svg
        key={ratingItem}
        fill={ratingItem <= Math.round(ratingValue) ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 text-red-500"
        viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      )}
    </div>
  )
}
