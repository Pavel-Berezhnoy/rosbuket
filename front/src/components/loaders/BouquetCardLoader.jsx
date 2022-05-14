import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BouquetCardLoader() {
  return (
    <div className='m-2 p-6'>
      <Skeleton className='my-2' width={250} height={260} />
      <Skeleton className='my-2' width={`80%`} height={30} />
      <Skeleton className='my-2' width={`80%`} height={50} />
      <Skeleton className='my-2' width={`60%`} height={30} />
    </div>
  )
}
