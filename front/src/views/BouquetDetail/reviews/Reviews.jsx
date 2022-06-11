import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import reviewThunk from '../../../store/actions/reviewThunk';
import CountReviews from './CountReviews'
import ReviewForm from '../../../components/form/ReviewForm'
import ReviewsList from './ReviewsList'

export default function Reviews() {
  const { id } = useParams();
  const bouquet = useSelector(state => state.bouquetReducer.bouquet);
  const reviewsData = useSelector(state => state.reviewReducer.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bouquet?.id) dispatch(reviewThunk(`api/review?bouquet_id=${bouquet.id}`));
  }, [id]);

  return (
    <section>
      <div className="p-4 bg-gray-100"><h1 className="ml-2 font-bold text-2xl uppercase">Отзывы</h1></div>
      <div className='w-full mt-8 flex'>
        <div className='lg:w-1/2 w-full mr-4'>
          <CountReviews reviewsRate={reviewsData?.rate} totalRate={reviewsData?.total_rate} />
          <ReviewsList reviews={reviewsData?.reviews} />
        </div>
        <div className='lg:w-1/2 w-full'>
          <ReviewForm />
        </div>
      </div>
    </section>
  )
}
