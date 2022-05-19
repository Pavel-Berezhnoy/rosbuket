import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function ReviewLoader() {
  return (
    <div className='px-2 pb-4 my-4 border-solid border-slate-200 border-b-2'>
      <div className='flex my-4 justify-between'>
        <Skeleton width={200} height={20} />
        <Skeleton width={100} height={20} />
      </div>
      <Skeleton width={`100%`} height={50} />
      <Skeleton className='my-4' width={150} height={20} />
      <Skeleton width={`100%`} height={50} />
      <Skeleton className='my-4' width={150} height={20} />
      <Skeleton width={`100%`} height={50} />
    </div>
  )
}
