import React from 'react'
import { useSelector } from 'react-redux';
import ReviewLoader from '../../../components/loaders/ReviewLoader';
import UserReview from './userReview/UserReview';

export default function ReviewsList({ reviews }) {
  const loading = useSelector(state => state.reviewReducer.isLoading);
  return (
    <div>
      {loading
        ? [1, 2, 3].map(loader => <ReviewLoader key={loader} />)
        : (reviews?.length
          ? reviews.map(review => <UserReview key={review.id} review={review} />)
          : <div className='text-center text-2xl mt-4'>Отзывов нет. Будьте первым!</div>)}
    </div>
  )
}
