import React, { useState } from 'react'

export default function SelectRating({ setSelectedRating, selectedRating }) {
  const rating = [1, 2, 3, 4, 5];
  const [hoveredRating, setHoveredRating] = useState();

  return (
    <div className='flex my-4 p-2 rounded border-solid shadow-md'>
      {rating.map(ratingItem => ratingItem <= selectedRating || ratingItem <= hoveredRating
        ? <svg
          key={ratingItem}
          onClick={() => setSelectedRating(ratingItem)}
          onMouseOut={() => setHoveredRating(0)}
          onMouseOver={() => setHoveredRating(ratingItem)}
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-8 h-8 cursor-pointer text-red-500"
          viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
        : <svg
          key={ratingItem}
          onClick={() => setSelectedRating(ratingItem)}
          onMouseOut={() => setHoveredRating(0)}
          onMouseOver={() => setHoveredRating(ratingItem)}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-8 h-8 cursor-pointer hover:fill-red-500 text-red-500"
          viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>)}
    </div>
  )
}
