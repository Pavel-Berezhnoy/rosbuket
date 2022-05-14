import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CategoryCardLoader() {
  return (
    <div className='border-solid border h-[300px] border-gray-300 p-6 max-w-[300px] w-full flex flex-wrap justify-center items-center'>
      <Skeleton width={150} height={150} />
      <Skeleton width={200} height={25} />
    </div>
  )
}
