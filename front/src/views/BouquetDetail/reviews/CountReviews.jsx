import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import CountRating from './CountRating';

export default function CountReviews({ reviewsRate, totalRate }) {
  const loading = useSelector(state => state.reviewReducer.isLoading);
  return (
    <>
      <div className='flex pb-16 border-solid border-slate-200 border-b-2'>
        <div style={{ width: 200, height: 200 }}>
          <CircularProgressbarWithChildren
            styles={{
              path: {
                stroke: `rgb(239 68 68)`,
              },
              trail: {
                stroke: `rgb(226 232 240)`,
              }
            }}
            className='text-red-500'
            value={totalRate}
            maxValue={5}
            minValue={0} >
            <div className='flex flex-col items-center'>{loading
              ? <div className='w-full text-center'>
                <Skeleton className='mb-4' width={50} height={30} />
                <Skeleton width={'100%'} height={20} />
              </div>
              : (totalRate
                ? <>
                  <span className='font-bold text-4xl'>{totalRate}</span>
                  <span className='text-xl'>Средняя оценка</span>
                </>
                : <span className='text-xl'>Оценок нет</span>)}
            </div>
          </CircularProgressbarWithChildren >
        </div>
        <div className='ml-8'>
          {loading
            ? <div className='my-2'>
              <Skeleton className='my-2' width={200} height={20} />
              <Skeleton width={200} height={40} />
            </div>
            : <>
              <div>
                <span className='font-bold underline'>Отличных отзывов: {reviewsRate && reviewsRate[5] || 0}</span>
                <CountRating ratingValue={5} />
              </div>
              <div>
                <span className='font-bold underline'>Хороших отзывов: {reviewsRate && reviewsRate[4] || 0}</span>
                <CountRating ratingValue={4} />
              </div>
              <div>
                <span className='font-bold underline'>Средних отзывов: {reviewsRate && reviewsRate[3] || 0}</span>
                <CountRating ratingValue={3} />
              </div>
              <div>
                <span className='font-bold underline'>Ниизких отзывов: {reviewsRate && reviewsRate[2] || 0}</span>
                <CountRating ratingValue={2} />
              </div>
              <div>
                <span className='font-bold underline'>Плохих отзывов: {reviewsRate && reviewsRate[1] || 0}</span>
                <CountRating ratingValue={1} />
              </div>
            </>}
        </div>
      </div>
    </>
  )
}
